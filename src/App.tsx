import './App.css';
import Logo from './components/Logo';
import { SlotMachine } from './components/SlotMachine';
import { PaletteProvider, usePalettes } from './contexts/PaletteContext';
import clsx from 'clsx';

const AppContent = () => {
  const { currentColors, switchToRandomPalette } = usePalettes();

  return (
    <main
      className={clsx(
        'min-h-screen flex flex-col',
        'transition-all duration-500 ease-in-out'
      )}
      style={{
        backgroundColor: currentColors.background,
        color: currentColors.text,
      }}
    >
      {/* Main Content - Centered */}
      <div className='flex-1 flex items-center justify-center p-8 relative z-10'>
        {/* Hero text */}
        <div className='text-left'>
          <p
            className={clsx(
              'text-6xl md:text-8xl font-mattone font-normal leading-tight',
              'transition-colors duration-500 ease-in-out'
            )}
            style={{
              color: currentColors.text,
            }}
          >
            Hi, I'm Alex
            <br />
            and I love
          </p>

          {/* Slot Machine */}
          <div className='-mt-2 max-w-4xl mx-auto'>
            <SlotMachine />
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav
        className={clsx(
          'fixed bottom-0 left-0 right-0 p-6 rounded-t-3xl shadow-2xl relative z-10',
          'transition-colors duration-500 ease-in-out'
        )}
        style={{
          backgroundColor: currentColors.surface,
          boxShadow: `0 -10px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)`,
        }}
      >
        <div className='max-w-4xl mx-auto flex justify-center'>
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
        </div>
      </nav>
    </main>
  );
};

function App() {
  return (
    <PaletteProvider>
      <AppContent />
    </PaletteProvider>
  );
}

export default App;
