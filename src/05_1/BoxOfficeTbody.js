import { GoArrowUp, GoArrowRight, GoArrowDown } from "react-icons/go";

export default function BoxOfficeTbody({ dailyBoxOfficeList, setselMv }) {


    const handleClick = (mv) => {
        setselMv(mv);

    }
    const myItems = dailyBoxOfficeList.map(items =>

        <tr key={items.movieCd}
        onClick={() => { handleClick(items) }}
        className="h-10 hover:bg-blue-100 hover:font-bold" >
        <th className="text-center bg-gray-100 ">{items.rank}</th>
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
        <tbody>
            {myItems}
        </tbody>
    )
}
