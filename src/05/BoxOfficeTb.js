import { FaRegMehBlank } from "react-icons/fa"
import { GoArrowUp, GoArrowRight, GoArrowDown } from "react-icons/go";
import BoxOfficeData from "./BoxOffice.json"
import { useState } from "react";


export default function BoxOfficeTb() {

    const dailyBoxOfficeList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList
    const [selmv, setselMv] = useState();
            // selmv 변수는 직접적으로 다룰 수가 없고 setselMv를 활용해서 selmv 에 접근한다. useState는 안에 selmv가 들어온 것을 감지한다.
            //state 변수를 사용하기위해서는 = 연산을 활용할수 없기 때문에 setsel 함수를 사용한다. 
            // useState() 함수는 
    const handleClick = (mv) => {
        setselMv(mv);
    }

        // state 변수
    
    
    
        const myItems = dailyBoxOfficeList.map(items =>
        <tr key={items.movieCd}
            onClick={() => { handleClick(items) }}
            className="h-10 hover:bg-blue-100 hover:font-bold" >
            <th className="text-center">{items.rank}</th>
            <th>{items.movieNm}</th>
            <th>{parseInt(items.salesAmt).toLocaleString()} 원 </th>
            <th>{parseInt(items.audiCnt).toLocaleString()} 명 </th>
            <th>
                {parseInt(items.rankInten) === 0 ? <GoArrowRight />
                    : parseInt(items.rankInten) > 0 ? <GoArrowUp className="text-pink-900" />
                        : <GoArrowDown className="text-cyan-400" />
                }
                {items.rankInten !== 0 && Math.abs(items.rankInten)}
            </th>
        </tr>

    )

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <table className=" w-4/5 border">
                <thead>
                    <tr className=" h-10 text-center bg-green-300 text-black">
                        <th className="w-10">순위</th>
                        <th>영화이름</th>
                        <th>매출액</th>
                        <th className="w-1/5">관객수</th>
                        <th className="w-20">순위변화</th>
                    </tr>
                </thead>
                <tbody>
                    {myItems}
                </tbody>
            </table>
            <div className="w-4/5 h-20 bg-zinc-900 text-white flex flex-col justify-center items-center">
                {selmv === undefined && ' 영화를 선택해 주세요.'}
                {selmv &&
                `[${selmv.movieCd  }] ${selmv.movieNm} ${selmv.rankInten}`
                }
            </div>
        </div>
    )
}
