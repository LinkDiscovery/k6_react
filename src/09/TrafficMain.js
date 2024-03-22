import React from 'react'
import { useState, useEffect } from 'react'
import TrafficNav from './TrafficNav'

//디펜던시 어레이 없이 하지않는 것을 추천 

export default function TrafficMain() {
    const [tdata, setTdata]= useState() // useState의 return값이 두개 두개를 원하는 이름으로 나눠서 받아서 쓸것이다 이것을 , 구조분해할당이라한다.
                            //useState 전체 fetch 데이터 (17개 배열)
    const [c1,setC1]=useState()
    const [selC1,setSelC1] = useState()
    const getDataFetch=(url) =>{
    
        fetch(url)// 비동기 방식으로 작동, 다른 행동 하고 있다가 데이터가 왔을 때 .then에 응답이 담긴다. 
                    // resp에 담는다. 응답에 대한 결과를 제이슨 형태로 바꿔줘 resp.json()
                    // useEffect
                    //fetch m
        .then(resp => resp.json()) // resp.json resp의 데이터를 json으로 바꿔줘하고 딴짓하고 있다가 .then에서 받는다
        .then(data => setTdata(data.data)) // 안의 변수 이름은 내가 정하는것 ,여기에 담기는 것은 제이슨으로 바뀐형태의 데이터
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`
        url = `${url}page=1&perPage=20&`
        url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`

    
        console.log(url)


        getDataFetch(url)

    },[]) // []는 앞의 콜백함수를 한번만 실행

    useEffect(()=>{
        if(!tdata) return
        let tm = tdata.map(item => item.사고유형_대분류)
        tm = new Set(tm) // 이대로 나두면 집합으므로 배열로 바꿔줘야함
        tm=[...tm]
        console.log(tm)
        
        setC1(tm)
        
    },[tdata]) // [] = 디펜던시 에어리
    
    useEffect(()=>{
        console.log(selC1)
    },[selC1])

  return (
    <div className='w-full h-full mt-5 flex  flex-col justify-start items-center'>
     {c1 && <TrafficNav title="대분류"
                categoty={c1}
                sel={selC1}
                setSel={setSelC1}/>
  }
    </div>
  )
}
