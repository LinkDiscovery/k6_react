import { useState,useEffect, useTransition } from "react";

function MyClockTime(){
    const [currentTime,setCurrentTime] = useState()
    const [tm, setTm] = useState(0)
    //useEffect 함수는 바뀔때 마다 찍는다
    //but []는 첫번째만 실행된다.
    //컴포넌트가 생성될때 최초 한번 실행 
    useEffect(()=>{
       const t = setInterval(()=>{
            setCurrentTime(new Date)

        },1000)

        console.log("[]=>",currentTime)
        setTm(tm+1)

        return () => {clearInterval(t)}
    },[])

    //tm변수가 바뀔때 마다 실행
useEffect(()=>{
    console.log("[tm]=>",currentTime)
},[currentTime])
    // 렌더링이 일어날때마다 실행
useEffect(()=>{
    console.log("[]없는경우=>",currentTime)

})
    

    return(
        <h1 className="font-bold text-2xl">
          {currentTime && `현재시각 : ${currentTime.toLocaleTimeString()}`}
        </h1>
    );
}

export default MyClockTime;