import logo from '../logo.svg';

function MainHeader(){

    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      // jsx 문법을 사용한다. html과 js 문법을 같이 사용한다 , 
      //대표적으로 다른것은 className이 class 로 적용된다
    );
}

export default MainHeader;