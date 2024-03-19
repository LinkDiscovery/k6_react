import React from 'react'

export default function TailButton({caption, color, handleClick}) {
    const colorObj = {
        'blue' : 'bg-blue-500',
        'red' : 'bg-red-500',
        'orange' :'bg-orange-500'
    }

    const hoverObj = {
        'blue' : 'hover:bg-blue-800',
        'red' : 'hover:bg-red-800',
        'orange' :'hover:bg-orange-800'
    }

    

    const bColor = `m-2 p-4 py-2 rounded-md
                    ${colorObj[color]} 
                    ${hoverObj[color]} text-white`
    

  return (
    <button className= {bColor}
             onClick = {handleClick}>

        {caption}
    </button>
  )
}
