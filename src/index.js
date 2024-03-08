import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // App뒤에 .js 생략됨
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //index.html를 가져온다는 의미 

root.render( // root에 가져다 끼운다(render) 뭐를 가져다 끼운다? App을 가져다 끼운다. 
  <React.StrictMode>
    <App /> 
    {/* 사용자 정의 태크 App을 사용하기 위해서 위와 같은 방법으로 사용하는 것 매우 중요하다고함 */}
  </React.StrictMode>
);// 여기서 return 값을 반환하는데 반환하는게 index.html 태크 자체를 반환한다. 그래서 바뀐다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
