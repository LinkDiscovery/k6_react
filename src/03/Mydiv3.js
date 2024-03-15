export default function Mydiv3(probs) {

  return (
    <div className="w-4/5 h-4/5 flex items-center justify-center bg-lime-500 text-lime-50 " >

      <p className="w-4/5 flex justify-start font-bold text-2xl ">{`${probs.d1}>${probs.d2}>${probs.d3}`}</p>
      
    </div>
  )
}
