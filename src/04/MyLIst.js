import { FaHeartbeat } from "react-icons/fa";
import { useState} from "react"
// 변경이 감지될 수 있는 장치를 마련해야한다.


export default function MyLIst({ title, imgUrl, content }) {
// 지역변수
    let cnt = 0;

//state 변수 = 상태변수 구조분해할당으로 받아야한다.
// 굉장히 중요 state 훅 
// state 훅을 이해 못하면 안됌
    const [stCnt, setStCnt] = useState(0);
            // 배열 안에 변수명 , 변수를 바꿀 함수명을 쓴다.
            // 바꾸기전 변수 stCnt, 바뀌고 난 뒤 setStCnt  
    const handleLike = (t) => {
        console.log('handleLike'+t)
        console.log('handleLike')

        cnt = cnt + 1
        console.log(`cnt = ${cnt}`)
        setStCnt(stCnt + 1);
    }

return (

    <div className="hover:bg-gray-100 flex flex-row justify-center ">
        <div className="w-1/4 max-w-40 flex flex-col">
            <img className='rounded-full' src={imgUrl} alt={title}></img>
        </div>
        <div className="w-3/4 px-8 py-3 flex flex-col justify-start items-start">
            <h1 className="text-2xl font-bold text-gray-700">{title}</h1>

            <p className="flex justify-start items-start text-left text-gray-600">
                {content}
            </p>

            <p className="w-full flex justify-end font-bold mt-5">
                <span className="text-1xl text-base" onClick={() => {handleLike(title)}}>
                                                                    {/* 변수를 전달시켜주고 싶을때는 콜백함수를 사용해야한다. */}

                    <FaHeartbeat className="text-gray-500 hover:text-red-600" />
                </span>
                <span className="mx-2">
                    좋아요
                </span>
                <span >{stCnt}</span>
                {/* 값이 바뀔때 마다 여기 새로 그려지도록 해야한다. 그러기 위해 hook을 사용한다. */}
                {/* hook을 사용할 것이다.  */}
                {/* 훅 덕분에 값이 변하는 것을 잡아낼 수 있다. */}
                {/*  훅이 굉장히 중요함  */}
            </p>
        </div>
    </div>


)
}
