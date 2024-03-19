import { FaRegMehBlank } from "react-icons/fa"
import { GoArrowUp, GoArrowRight, GoArrowDown } from "react-icons/go";
import BoxOfficeData from "./BoxOffice.json"
import { useState } from "react";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeInfo from "./BoxOfficeInfo";

export default function BoxOfficeTb() {

    const dailyBoxOfficeList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList
    const [selmv, setselMv] = useState();
    
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <table className=" w-4/5 border">
 
                <BoxOfficeThead/>
                <BoxOfficeTbody dailyBoxOfficeList={dailyBoxOfficeList} setselMv={setselMv}/>
            </table>
            <BoxOfficeInfo selmv={selmv}/>
        </div>
    )
}
