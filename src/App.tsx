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
      }}
    >
      <div
        className='rounded-2xl shadow-xl p-8 max-w-md w-full'
        style={{
          backgroundColor: currentColors.surface,
        }}
      >
        <h1
          className='text-2xl font-bold text-center mb-6'
          style={{ color: currentColors.text }}
        >
          Palette System Test
        </h1>

        {/* Current Palette Display */}
        <div className='text-center mb-6'>
          <h2
            className='text-lg font-semibold mb-2'
            style={{ color: currentColors.text }}
          >
            Current Palette: {currentColors.name}
          </h2>
          <div
            className='w-32 h-32 mx-auto cursor-pointer hover:scale-105 transition-transform duration-200'
            onClick={switchToRandomPalette}
            title='Click to switch to random palette'
          >
            <Logo
              zone1Color={currentColors.primary}
              zone2Color={currentColors.secondary}
              zone3Color={currentColors.accent}
              className='w-full h-full'
            />
          </div>
          <p
            className='text-sm mt-2'
            style={{ color: currentColors.textSecondary }}
          >
            Click the logo to switch palette
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
