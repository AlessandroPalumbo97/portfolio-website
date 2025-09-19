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
        className='rounded-2xl shadow-xl p-8 max-w-4xl w-full'
        style={{
          backgroundColor: currentColors.surface,
          transition: 'background-color 0.5s ease-in-out',
        }}
      >
        {/* Portfolio Header */}
        <div className='text-center mb-12'>
          <h1
            className='text-4xl font-display font-bold mb-4'
            style={{
              color: currentColors.text,
              transition: 'color 0.5s ease-in-out',
            }}
          >
            Alex Portfolio
          </h1>
          <p
            className='text-lg font-body'
            style={{
              color: currentColors.textSecondary,
              transition: 'color 0.5s ease-in-out',
            }}
          >
            Creative Developer & Designer
          </p>
        </div>

        {/* Logo Section */}
        <div className='text-center mb-12'>
          <div
            className='w-24 h-24 mx-auto cursor-pointer hover:scale-105 transition-transform duration-200'
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

        {/* Portfolio Sections Placeholder */}
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='text-center'>
            <h2
              className='text-2xl font-display font-bold mb-4'
              style={{
                color: currentColors.text,
                transition: 'color 0.5s ease-in-out',
              }}
            >
              About
            </h2>
            <p
              className='font-body'
              style={{
                color: currentColors.textSecondary,
                transition: 'color 0.5s ease-in-out',
              }}
            >
              Coming soon...
            </p>
          </div>

          <div className='text-center'>
            <h2
              className='text-2xl font-display font-bold mb-4'
              style={{
                color: currentColors.text,
                transition: 'color 0.5s ease-in-out',
              }}
            >
              Projects
            </h2>
            <p
              className='font-body'
              style={{
                color: currentColors.textSecondary,
                transition: 'color 0.5s ease-in-out',
              }}
            >
              Coming soon...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
