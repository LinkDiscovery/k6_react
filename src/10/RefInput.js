import React from 'react'
import TailInput from '../UI/TailInput'
import TailButton from '../UI/TailButton'
import { useState, useEffect, useRef } from 'react'

export default function RefInput() {
    const inputRef = useRef() //input은 ref
    const [bts, setBts] = useState([])
    const [tags, setTags] = useState([])

    const handleAdd = () => {
        if (inputRef.current.value === '') { //value하면 값을 가지고 오고 
            alert('값을 입력하세요.')
            inputRef.current.focus(); // 포커스는 
        }

        setBts([inputRef.current.value, ...bts])
    }

    const handleRemove = () => {
        setBts([])
        inputRef.current.value = ''
        inputRef.current.focus();

    }

    useEffect(() => {
        inputRef.current.value = ''
        inputRef.current.focus();
        let tm = bts.map((item, idx) => 
            <TailButton caption={item} key={`bt${idx}`} color="orange" />
    )
        setTags(tm)
    }, [bts])

    return (
        <div className='w-11/12 flex flex-col justify-between'>
            <div className='w-full flex flex-row justify-between'>

                <div className="w-1/2 flex justify-center items-center">
                    <input type="date"
                        ref={inputRef}
                        className="bg-gray-50 border
                     border-gray-300
                      text-gray-900 text-sm
                       rounded-lg 
                       focus:ring-blue-500 
                      focus:border-blue-500 block w-full p-2.5"

                    />
                </div>

                <div className="w-1/2 flex justify-center items-center">
                    <TailButton caption=" 등록 " color="blue" handleClick={handleAdd} />
                    <TailButton caption=" 취소 " color="blue" handleClick={handleRemove} />
                </div>
            </div>
            <div className="w-full border p-5 bg-slate-100">
                {tags}
            </div>
        </div>
    )
}
