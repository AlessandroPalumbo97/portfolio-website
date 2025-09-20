import { useState, useEffect } from 'react';
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
            y: -currentIndex * 300, // Fixed height: each item is 300px
          }}
          transition={{
            type: 'tween',
            ease: isSpinning ? 'linear' : 'easeOut',
            duration: isSpinning ? 0.1 : 0.8,
          }}
        >
          {slotContent.map((item, index) => (
            <div key={`${item.label}-${index}`} className='slot-item'>
              <div className='flex items-end gap-1'>
                <span
                  className={clsx(
                    'label text-6xl md:text-8xl font-mattone font-bold capitalize leading-tight',
                    'transition-colors duration-500 ease-in-out hover:opacity-80 cursor-pointer'
                  )}
                  style={{
                    color: currentColors.accent,
                  }}
                  onClick={handleClick}
                >
                  {item.label} {item.emoji}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
