import React, { useState } from 'react'
// import GalleryCard from './GalleryCard'
// import GallreryData from './GalleryData.json'
import TailButton from '../UI/TailButton'
import TailInput from '../UI/TailInput'
import GalleryCard from './GalleryCard'
import {useEffect,useRef } from 'react'

export default function GalleryMain() {
    const keyword = useRef()
    const [tdata,setTdata] = useState()
    const [tags,setTags] = useState()

    useEffect(()=>{
        if(!tdata) return;

        let tm = tdata.map((item)=>
            <GalleryCard
                        key = {item.galContentId}
                        url = {item.galWebImageUrl.replace('http://','https://')}
                        title = {item.galTitle}
                        location={item.galPhotographyLocation}
                        ktag ={item.galSearchKeyword} />)
        setTags(tm)

    },[tdata])


    const getData = (w) => {
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&`
        url = url + `keyword=${w}&_type=json`

        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data.response.body.items.item))
        .catch(err => console.log(err))

    }


    const handleKeyword = () => {
        console.log()
    }

    const handleFetch = () => {
        if (keyword.current.value == '') {
            alert('키워드를 입력하세요')
            keyword.current.focus()
            return
        }
        let w = encodeURI(keyword.current.value)
        getData(w)
    }

 

    // 


    const handleClear = () => {
        console.log(keyword.current.value)
    }





    return (
        <div className='w-11/12 flex flex-col h-full justify-start items-center'>
            <div className='
        w-full p-2 grid grid-cols-1 md:grid-cols-3 gap-4 
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
                    <TailButton caption={"취소"}
                        color={"blue"}
                        handleClick={handleClear}
                    />

                </div>
               

            </div>
            <div className='w-full p-2 grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {tags}
                </div>
        </div>
    )
}




















