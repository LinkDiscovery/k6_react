import Mydiv3 from "./Mydiv3";

export default function Mydiv2({d1,d2,d3}) { 
//                             오브젝트 키값으로 받음

  return (
    <div className="w-4/5 h-4/5 flex flex-col items-center justify-center bg-lime-700 text-lime-50 my-5" >
      <p className="w-4/5 flex justify-start font-bold text-2xl">{`${d1} > ${d2}`}
      </p>
    <Mydiv3 d1 = {d1} d2 = {d2} d3 = {d3}/>
    </div>
  )
}
