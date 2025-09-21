import './App.css';
import { FadeTransition } from './components/FadeTransition';
import Navbar from './components/Navbar';
import { PaletteProvider, usePalettes } from './contexts/PaletteContext';
import clsx from 'clsx';

const AppContent = () => {
  const { currentColors } = usePalettes();

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
      <div className='flex flex-1 w-full'>
        {/* Hero text */}
        <div className='flex flex-col w-full px-12 py-8'>
          <p
            className={clsx('hero-text')}
            style={{
              color: currentColors.text,
            }}
          >
            Hi, I'm <span className='font-bold'>Alex</span>
            <br />
            and I <span className='font-bold'>love</span>
          </p>

          {/* Fade Transition */}
          <FadeTransition />
          {/* <SlotMachine /> */}
        </div>
      </div>

      {/* Bottom Navbar */}
      <Navbar />
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
