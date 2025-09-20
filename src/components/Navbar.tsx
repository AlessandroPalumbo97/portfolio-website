import React from 'react';
import Logo from './Logo';
import { usePalettes } from '../contexts/PaletteContext';
import clsx from 'clsx';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const { currentColors, switchToRandomPalette } = usePalettes();

  // Get current branch name (only in development)
  const getCurrentBranch = () => {
    if (import.meta.env.PROD) return null;

    // Try to get branch from environment variable or default to 'develop'
    const branch = import.meta.env.VITE_GIT_BRANCH || 'develop';
    return branch;
  };

  const currentBranch = getCurrentBranch();

  return (
    <nav
      className={clsx(
        'fixed bottom-0 left-0 right-0 p-6 rounded-t-3xl shadow-2xl relative z-10',
        'transition-colors duration-500 ease-in-out',
        className
      )}
      style={{
        backgroundColor: currentColors.surface,
        boxShadow: `0 -10px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)`,
      }}
    >
      <div className='max-w-4xl mx-auto flex sm:flex-row flex-col justify-between items-center gap-4'>
        {/* Logo */}
        <div
          className='w-16 h-16 cursor-pointer hover:scale-105 transition-transform duration-200'
          onClick={switchToRandomPalette}
          title='Click to switch palette'
        >
          <Logo
            zone1Color={currentColors.primary}
            zone2Color={currentColors.secondary}
            zone3Color={currentColors.accent}
            className='w-full h-full'
          />
        </div>

        {/* Branch name display (only in development) */}
        {currentBranch && (
          <div
            className={clsx(
              'px-3 py-1 rounded-full text-xs font-mono font-medium',
              'transition-colors duration-500 ease-in-out',
              'border-2 border-dashed'
            )}
            style={{
              color: currentColors.accent,
              borderColor: currentColors.accent,
              backgroundColor: `${currentColors.accent}10`,
            }}
          >
            branch: {currentBranch}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
