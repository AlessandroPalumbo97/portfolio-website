import './App.css';
import logo from './assets/ap-logo.svg';

function App() {
  return (
    <main className='flex flex-col gap-10 items-center justify-center p-10'>
      <img src={logo} alt='logo' className='w-32 h-32' />
      <h1 className='text-4xl font-bold'>TO DO</h1>
    </main>
  );
}

export default App;
