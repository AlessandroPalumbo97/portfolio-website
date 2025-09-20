import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import data from '../assets/data.json';
import { usePalettes } from '../contexts/PaletteContext';
import clsx from 'clsx';

interface SlotContent {
  label: string;
  emoji: string;
}

interface SlotMachineProps {
  className?: string;
}

export const SlotMachine = ({ className = '' }: SlotMachineProps) => {
  const { currentColors } = usePalettes();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [itemHeight, setItemHeight] = useState(192); // Default mobile height
  const slotItemRef = useRef<HTMLDivElement>(null);
  const slotContent: SlotContent[] = data['slot-content'];

  // Set initial index to "coding" on component mount
  useEffect(() => {
    const codingIndex = slotContent.findIndex(
      (item) => item.label === 'coding'
    );
    if (codingIndex !== -1) {
      setCurrentIndex(codingIndex);
    }
  }, [slotContent]);

  // Update item height based on screen size
  useEffect(() => {
    const updateItemHeight = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setItemHeight(320); // 20rem
      } else if (width >= 1024) {
        setItemHeight(288); // 18rem
      } else if (width >= 768) {
        setItemHeight(256); // 16rem
      } else if (width >= 640) {
        setItemHeight(224); // 14rem
      } else {
        setItemHeight(192); // 12rem
      }
    };

    updateItemHeight();
    window.addEventListener('resize', updateItemHeight);
    return () => window.removeEventListener('resize', updateItemHeight);
  }, []);

  const handleClick = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    // Generate random spins with realistic timing
    const spinCount = Math.floor(Math.random() * 8) + 6; // 6-13 spins
    let currentSpin = 0;

    const spinInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slotContent.length);
      currentSpin++;

      if (currentSpin >= spinCount) {
        clearInterval(spinInterval);
        setIsSpinning(false);
      }
    }, 100);
  };

  return (
    <div className={clsx('slot-machine', className)}>
      <div className='slot-window'>
        <motion.div
          className='slot-items'
          animate={{
            y: -currentIndex * itemHeight, // Dynamic height based on screen size
          }}
          transition={{
            type: 'tween',
            ease: isSpinning ? 'linear' : 'easeOut',
            duration: isSpinning ? 0.1 : 0.8,
          }}
        >
          {slotContent.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className='slot-item'
              ref={index === 0 ? slotItemRef : undefined}
            >
              <div className='flex items-end gap-1'>
                <span
                  className={clsx(
                    'label hero-text font-black capitalize',
                    'cursor-pointer'
                  )}
                  style={{
                    color: currentColors.accent,
                  }}
                  onClick={handleClick}
                >
                  {item.emoji} {item.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
