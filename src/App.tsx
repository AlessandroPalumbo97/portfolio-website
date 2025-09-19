import './App.css';
import Logo from './components/Logo';
import { usePalettes } from './hooks/usePalettes';

function App() {
  const { currentColors, switchToRandomPalette } = usePalettes();

  return (
    <main
      className='min-h-screen flex flex-col'
      style={{
        backgroundColor: currentColors.background,
        color: currentColors.text,
        transition: 'background-color 0.5s ease-in-out, color 0.5s ease-in-out',
      }}
    >
      {/* Main Content - Centered */}
      <div className='flex-1 flex items-center justify-center p-8 relative z-10'>
        {/* Hi... LOVE Text - HUGE */}
        <div className='text-center'>
          <p
            className='text-6xl md:text-8xl font-mattone font-normal leading-tight'
            style={{
              color: currentColors.text,
              transition: 'color 0.5s ease-in-out',
            }}
          >
            Hi, I'm Alex and I{' '}
            <span
              className='font-mattone font-black'
              style={{
                color: currentColors.primary,
                transition: 'color 0.5s ease-in-out',
              }}
            >
              LOVE
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav
        className='fixed bottom-0 left-0 right-0 p-6 rounded-t-3xl shadow-2xl relative z-10'
        style={{
          backgroundColor: currentColors.surface,
          transition: 'background-color 0.5s ease-in-out',
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
}

export default App;
