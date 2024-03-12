// import '../01/Hello.css'

function Hello(){
    let n = Math.floor(Math.random()*20)+1;

    const st1 = {
        backgroundColor: "darkblue",
        color : "white"
    }

    // let s = '';
    // if(n%2===0) s = '짝수';
    // else s ='홀수';
    // 숫자 뒤에 짝수냐 홀수냐 표시하는 방법 1 , 방법 2는 삼항 연산자
    let x ;

    const currentTime = new Date();

    return(
    <h1>
        <p>
          {currentTime.toLocaleTimeString()}  
        </p>

       <span style={st1}> Hello  </span>
       <span style={{display:"inline-flex", margin:"10px"}}> 
       {n < 10 && "0"} 
       {/* 홀씨조건문, 위에 조건식이 맞으면 밑에께 나온다. */}
       {n} 
       {/* { n < 10 ? `0${n}`: n} */} 
       {/* 위의 조건문을 삼항연산자로 표현했을때 */}
       </span>

       {n%2 ===0 ? 
       <span style={{color:"blue"}}>짝수😍</span>
       :<span style={{color:"brown"}} >홀수</span>} 
       {n%2 ===1 && "🤦‍♂️"}

       {/* 삼항연산자, 조건부 렌더링 */}
       {/* <p>{ x || "x는 undefinded이다"}</p> */}




    </h1>
    )};

export default Hello;