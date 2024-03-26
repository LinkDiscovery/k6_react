import React from 'react'
// import GalleryCard from './GalleryCard'
// import GallreryData from './GalleryData.json'
import TailButton from '../UI/TailButton'
import TailInput from '../UI/TailInput'
import { useRef } from 'react'


export default function GalleryMain() {
    const keyword = useRef()

    const handleKeyword=()=>{
        console.log()
    }
    
    const handleFetch=()=>{
        let w = encodeURI(keyword.current.value)
        console.log(w)
    }

    const handleClear=()=>{
        console.log(keyword.current.value)
    }

    


    return (
        <div className='w-11/12 flex flex-col h-full justify-start items-center'>
        <div className='
        w-full p-2 grid grid-cols-1 md:grid-cols-1 gap-4 
        '>
            <div className='w-full px-2'>
            <TailInput type='text'
                        inputRef={keyword}
                        ph="키워드 입력"
                        handleChange={handleKeyword}
            />
            </div>
            <div>
            <TailButton caption={"조회"}
                        color={"blue"}
                        handleClick={handleFetch}
            />

            </div>
            <div>
            <TailButton caption={"조회"}
                        color={"blue"}
                        handleClick={handleClear}
            />

            </div>

        </div>
        </div>
    )
}






















// const title = GallreryData.galTitle
// const location = GallreryData.galPhotographyLocation
// const url = GallreryData.galWebImageUrl
// let ktag = GallreryData.galSearchKeyword

{/* <GalleryCard
                    title = {title}
                    location = {location}
                    url = {url}
                    ktag={ktag}
      /> */}