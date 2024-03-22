// import Mydiv1 from './03/Mydiv1'
// import Mydiv2 from './03/Mydiv2';
// import MyLIst from './04/MyLIst';
// import MyListMain from './04/MyListMain';
// import BoxOfficeTb from './05_1/BoxOfficeTb';
// import Lotto from './06/Lotto';
// import FoodCard from './07/FoodCard';/
// import FoodMain from './07/FoodMain';
// import MyClock from './08/MyClock';
import TrafficMain from './09/TrafficMain';


import './App.css';



function App() {
  return (
    <div className='flex flex-col w-full max-w-screen-xl h-screen mx-auto overscroll-y-auto'>
      <header className='flex justify-between items-center p-10 h-20 text-xl font-bold text-zinc-700 bg-lime-100'>
        <div>리액트 실습</div>
      </header>
      <main className='h-3/4 glow flex flex-col justify-center text-start items-center '>
        {/* <thead>
          <tr className=" h-10 text-center bg-white-600 text-black">
            <th className="w-10">순위</th>
            <th>영화이름</th>
            <th>매출액</th>
            <th className="w-1/5">관객수</th>
            <th className="w-20">순위변화</th>
          </tr>
        </thead> */}
    
        <TrafficMain />

      </main>
      <footer className='flex justify-center items-center text-white bg-slate-800 h-10'>
        @ 2024 shinkyunyoung. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
