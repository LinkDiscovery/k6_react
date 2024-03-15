export default function MyLIst({title, imgUrl, content}) {

    return (

            <div className="hover:bg-gray-100 flex flex-row justify-center ">
                <div className="w-1/4 max-w-40 flex flex-col">
                    <img className= 'rounded-full' src={imgUrl} alt={title}></img>
                </div>
                <div className="w-3/4 px-8 py-3 flex flex-col justify-start items-start">
                    <h1 className="text-2xl font-bold text-gray-700">{title}</h1>

                    <p className="flex justify-start items-start text-left text-gray-600">
                        {content}
                    </p>

                    <p className="w-full flex justify-end font-bold mt-5">
                        <span className="text-1xl text-base">🧡</span>
                        <span className="mx-2">좋아요</span>
                        <span>0</span>
                    </p>
                </div>
            </div>


    )
}
