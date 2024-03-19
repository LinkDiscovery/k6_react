

export default function BoxOfficeInfo({selmv}) {
    

    return (
        
            <div className="w-4/5 h-20 bg-zinc-900 text-white flex flex-col justify-center items-center">
                {selmv === undefined && ' 영화를 선택해 주세요.'}
                {selmv &&
                    `[${selmv.movieCd}] ${selmv.movieNm} ${selmv.rankInten}`
                }
            </div>
        
    )
}
