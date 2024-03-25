import { FaRegMehBlank } from "react-icons/fa"
import { GoArrowUp, GoArrowRight, GoArrowDown } from "react-icons/go";
import BoxOfficeData from "./BoxOffice.json"
import { useState, useEffect, useRef } from "react";
import BoxOfficeTbody from "../05_1/BoxOfficeTbody";
import BoxOfficeThead from "../05_1/BoxOfficeThead";
import BoxOfficeInfo from "../05_1/BoxOfficeInfo";
import TailInput from "../UI/TailInput";

export default function BoxOfficeTbRe() {
    const[boxList,setBoxList] = useState()// 아무것도 없으면 맵을 못돈다. 그러므로 뭐든 넣어줘야한다. 그러면map 오류가 사라진다.
    const[trs,setTrs] = useState([]) // 오류안나게 하는 방법  useState([]) 이렇게 하던가 
    const boxRef=useRef()

    useEffect(()=>{





    },[boxList]);

    const getDada =(dt)=>{
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
        url = url + `key=${process.env.REACT_APP_MV_API}&targetDt=${dt}`
        console.log(url)

        fetch(url)
        //날아오는 데이터를 받을 때 쓴다.
        .then(resp => resp.json()) // 제이슨으로 만들어지는 것도 비동기로 만들어진다.
        .then(data => setBoxList(data.BoxOfficeDataoxOfficeRes.bult.dailyBoxOfficeList))
        .catch(err=> console.log(err))


    }
    const handelSelDate = () => {
       console.log(boxRef.current.value.replaceAll('-',''))
       // boxoffice 데이터 fetch//url에서 데이터를 가지고 오는것 
        getDada(boxRef.current.value.replaceAll('-',''))
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex justify-center items-center">
                <div className="flex items-center justify-center">
                    <span className="text-sm mx-5 font-bold "> 날짜 선택 : </span>
                    < TailInput type="date"
                        inputRef={boxRef}
                        handleChange={handelSelDate}
                        ph=""
                    />
                </div>
            </div>
          
        </div>
    )
}
