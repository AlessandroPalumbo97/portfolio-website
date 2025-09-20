import './App.css';
import Logo from './components/Logo';
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
        {/* Work in Progress Content */}
        <div className='text-center max-w-4xl mx-auto'>
          {/* Big Logo */}
          <div className='mb-12'>
            <div
              className='w-32 h-32 md:w-48 md:h-48 mx-auto cursor-pointer hover:scale-105 transition-transform duration-200'
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

          {/* Work in Progress Text */}
          <h1
            className={clsx(
              'text-4xl md:text-6xl font-mattone font-bold leading-tight',
              'transition-colors duration-500 ease-in-out'
            )}
            style={{
              color: currentColors.secondary,
            }}
          >
            Work in Progress
          </h1>
        </div>
      </div>
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
