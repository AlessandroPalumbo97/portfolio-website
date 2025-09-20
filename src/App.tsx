import './App.css';
import { SlotMachine } from './components/SlotMachine';
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
      <div className='flex-1 flex items-center justify-center p-8 relative z-10'>
        {/* Hero text */}
        <div className='text-left'>
          <p
            className={clsx('hero-text')}
            style={{
              color: currentColors.text,
            }}
          >
            Hi, I'm Alex
            <br />
            and I love
          </p>

          {/* Slot Machine */}
          <div className=''>
            <SlotMachine />
          </div>
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
