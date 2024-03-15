export default function Mydiv3({d1,d2,d3}) {

  return (
    <div className="w-4/5 h-4/5 flex items-center justify-center bg-lime-500 text-lime-50 " >

      <p className="w-4/5 flex justify-start font-bold text-2xl ">
        {`${d1}>${d2}>  ${d3}`}</p>
      
    </div>
  )
}
