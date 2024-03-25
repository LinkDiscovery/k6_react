import TailButton from "../UI/TailButton"
import { useState, useEffect,useRef } from "react";
export default function RefVal() {

    let cnt = 0;  //컴포넌트 변수
    const [stCnt,setStCnt] = useState(0); //state변수// 0은 초깃값
    const refCnt = useRef(0);



    const handleLocal= () => {
        cnt = cnt + 1
        console.log(cnt)
    }

    const handleState= () => {
        setStCnt(stCnt+1)
        console.log(stCnt)
    }

    const handleRef= () => {
        refCnt.current = refCnt.current +1
        console.log(refCnt.current)
    }

    useEffect(()=>{
        console.log("stCnt=" + stCnt)

    },[stCnt])


  return (
    <div className="w-11/12 grid grid-cols-3 
                    text-center
                    gap-4 ">
        <div>
            컴포넌트 변수(지역변수) : {cnt}
        </div>
        <div>
            state 변수(지역변수) : {stCnt}
        </div>
        <div>
            Ref 변수(지역변수) : {refCnt.current} 
            {/* Ref변수는 자체가 객체이기 때문에 그냥은 못쓰고 . 찍고 current를 적어줘야한다 */}
        </div>
        <div>
            <TailButton caption = "컴포넌트 변수"
                        color = "blue"
                        handleClick={handleLocal}/> 
                        {/* { } 자리에 전달되는 값이 있을 때는 콜백함수형식으로 해야한다. */}
        </div>
        <div>
            <TailButton caption = "state 변수"
                        color = "blue"
                        handleClick={handleState}/> 
        </div>
        <div>
            <TailButton caption = "Ref 변수"
                        color = "blue"
                        handleClick={handleRef}/> 
        </div>
    </div>
  )
}
