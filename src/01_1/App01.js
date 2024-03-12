// import logo from './logo.svg'; //svg 는 이미지다 . 이미지도 import 형태로 가지고 온다. react는 
import './App.css';
import MainHeader from './01/MainHeader'
import Hello from './01/Hello'
import MyClock from './01_1/MyClock';
// 컴포넌트 만들때 컴포넌트 명이 중요하다 , 컴포넌트 명은 대문자로 시작 

// 화살표 함수로 작성가능 
//const App = () => {}
// return()

function App() {
  return (
    //return 값은 한개만 되어야한다. 그래서 div가 2개로 나눠지면 오류가뜸 
    //프래그먼트 태그 안에 아무것도 없는것/ 왜 사용하는가? return 값을 1개로 만들어주기 위해 
    // 여러 개의 요소를 반환하고 싶다면 fragments라 불리는 <></> 를 사용
    // html의 클래스는 class 를 쓰지만 여기서는 className로 해야한다. 
    // 컴파일러할때 예약어와 충돌이 일어나서 문법이 조금 다르다
    <>
   
      <div className="App">
       <MainHeader />
       <Hello />
       <Hello />
       <Hello />
       <Hello />
       <Hello />
       <Hello />
       
       <MyClock />
        <div>402호</div>
      </div>
    </>
  );
}

export default App;
