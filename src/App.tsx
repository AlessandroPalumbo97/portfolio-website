import './App.css';
import Logo from './components/Logo';
import { usePalettes } from './hooks/usePalettes';

function App() {
  const { currentColors, switchToRandomPalette } = usePalettes();

  return (
    <main
      className='min-h-screen flex flex-col items-center justify-center p-8'
      style={{
        backgroundColor: currentColors.background,
        color: currentColors.text,
        transition: 'background-color 0.5s ease-in-out, color 0.5s ease-in-out',
      }}
    >
      <div
        className='rounded-2xl shadow-xl p-8 max-w-md w-full'
        style={{
          backgroundColor: currentColors.surface,
          transition: 'background-color 0.5s ease-in-out',
        }}
      >
        {/* Logo Section */}
        <div className='text-center mb-8'>
          <div
            className='w-32 h-32 mx-auto cursor-pointer hover:scale-105 transition-transform duration-200'
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

        {/* Hi... LOVE Text */}
        <div className='text-center'>
          <p
            className='text-lg font-body'
            style={{
              color: currentColors.text,
              transition: 'color 0.5s ease-in-out',
            }}
          >
            Hi, I'm Alex and I{' '}
            <span
              className='font-bold font-display'
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
    </main>
  );
}

export default App;
