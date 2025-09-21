import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../assets/data.json';
import { usePalettes } from '../contexts/PaletteContext';
import clsx from 'clsx';

interface SlotContent {
  label: string;
  emoji: string;
}

interface FadeTransitionProps {
  className?: string;
}

export const FadeTransition = ({ className = '' }: FadeTransitionProps) => {
  const { currentColors } = usePalettes();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slotContent: SlotContent[] = data['slot-content'];

  // Animation variants
  const emojiVariants = {
    rest: {
      y: 0,
    },
    hover: {
      y: [0, -5, 0],
      transition: {
        duration: 1,
        ease: 'easeInOut' as const,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    },
  };

  // Set initial index to "coding" on component mount
  useEffect(() => {
    const codingIndex = slotContent.findIndex(
      (item) => item.label === 'coding'
    );
    if (codingIndex !== -1) {
      setCurrentIndex(codingIndex);
    }
  }, [slotContent]);

  const handleClick = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Select random item (excluding current) immediately
    const availableItems = slotContent.filter(
      (_, index) => index !== currentIndex
    );
    const randomItem =
      availableItems[Math.floor(Math.random() * availableItems.length)];
    const newIndex = slotContent.findIndex(
      (item) => item.label === randomItem.label
    );

    setCurrentIndex(newIndex);
    setIsTransitioning(false);
  };

  const currentItem = slotContent[currentIndex];

  return (
    <div className={clsx('fade-transition', className)}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className='flex items-end gap-1'
          whileHover='hover'
        >
          <span
            className={clsx(
              'label hero-text font-black capitalize',
              'cursor-pointer transition-colors duration-300 ease-in-out',
              'hover:opacity-90'
            )}
            style={{
              color: currentColors.accent,
            }}
            onClick={handleClick}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = currentColors.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = currentColors.accent;
            }}
          >
            <motion.span variants={emojiVariants} className='inline-block'>
              {currentItem.emoji}
            </motion.span>{' '}
            {currentItem.label}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
