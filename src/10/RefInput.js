import React from 'react'
import TailInput from '../UI/TailInput'
import TailButton from '../UI/TailButton'
import { useState,useRef } from 'react'

export default function RefInput() {
    const inputRef = useRef()

    const handleAdd = () => {
        console.log(inputRef.current.value)

    }
    const handleRemove = () => {


    }


    return (
        <div className='w-11/12 flex flex-row justify-between'>
            <div className='w-full flex flex-row justify-between'>

                <div className="w-1/2 flex justify-center items-center">
                    <TailInput type="password" ph="값입력" 
                                ref= {inputRef}
                                />
                </div>

                <div className="w-1/2 flex justify-center items-center">
                    <TailButton caption=" 등록 " color="blue" handleClick={handleAdd}/>
                    <TailButton caption=" 취소 " color="blue" handleClick={handleRemove}/>
                </div>
            </div>
            <div>
            
            </div>
        </div>
    )
}
