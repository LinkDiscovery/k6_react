import HelloCss from './02_tailwind/HelloCss'
import './App.css';
import { WiAlien } from "react-icons/wi";


function App() {
  return (
    <div className='flex flex-col w-full max-w-screen-xl h-screen mx-auto overscroll-y-auto'>
      <header className='flex justify-between items-center p-10 h-20 text-xl font-bold text-zinc-700 bg-lime-100'>
        <div>리액트 실습</div>
        <div ><WiAlien className='text-2x1 text-blue-600'></WiAlien></div>
      </header>
      <main className='grow'>
        <HelloCss/>
        
      </main>
      <footer className='flex justify-center items-center text-white bg-slate-800 h-20'>
        @ 2024 shinkyunyoung. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
