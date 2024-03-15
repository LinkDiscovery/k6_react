import Mydiv3 from "./Mydiv3";

export default function Mydiv2(probs) {


  return (
    <div className="w-4/5 h-4/5 flex flex-col items-center justify-center bg-lime-700 text-lime-50 my-5" >
      <p className="w-4/5 flex justify-start font-bold text-2xl">{`${probs.d1} > ${probs.d2}`}
      </p>
    <Mydiv3 d1 = {probs.d1} d2 = {probs.d2} d3 = {probs.d3}/>
    </div>
  )
}
