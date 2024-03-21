import { useState } from 'react'
import bank from './img/bank.png'
import busan from './img/busan.png'
import market from './img/market.png'


export default function FoodCard({fobj}) {

  const fimg = fobj["구분"]==="기초푸드뱅크" ? bank :
  fobj["구분"]==="기초푸드마켓" ? market : busan

  const [change, changeSet] = useState(false) 
  const handleClick = ()=>{
    changeSet(!change)
  }


  return ( 

    <div className="w-11/12 flex justify-center items-center border
                    " onClick={handleClick}
                    >
      <div className='w-1/5 bg max-w-xl '>
      <img src = {fimg} alt={bank} className=''></img>
      </div>
    
      <div className=' w-4/5 '>
        <h2 className='w=full font-bold text-xl p-1'>{fobj["사업장명"]}</h2>
       <h2 className='w=full font-bold p-1'>{fobj["운영주체명"]}</h2>
       <h2 className='w=full
      text-gray-500 text-sm p-1'>{fobj["사업장 소재지"]} </h2>
       <h2 className='w=full h-8
      bg-stone-900  text-white p-1' 

      > {change && `Tel : ${fobj["연락처(대표번호)"]} , Fax : ${fobj["팩스번호"]}`} </h2>
      </div>
      
    </div>
    
  )


}
