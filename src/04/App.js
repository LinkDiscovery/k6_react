import Mydiv1 from './03/Mydiv1'
import Mydiv2 from './03/Mydiv2';
import MyLIst from './04/MyLIst';
import MyListMain from './04/MyListMain';
import BoxOfficeTb from './05/BoxOfficeTb';
import './App.css';



function App() {
  return (
    <div className='flex flex-col w-full max-w-screen-xl h-screen mx-auto overscroll-y-auto'>
      <header className='flex justify-between items-center p-10 h-20 text-xl font-bold text-zinc-700 bg-lime-100'>
        <div>리액트 실습</div>
      </header>
      <main className='glow flex flex-col justify-center text-center items-center h-full'>
        <MyListMain/>
        
      </main>
      <footer className='flex justify-center items-center text-white bg-slate-800 h-20'>
        @ 2024 shinkyunyoung. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
