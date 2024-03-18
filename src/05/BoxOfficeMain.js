import BoxOfficeData from "./BoxOffice.json"
import BoxOfficeTb from "./BoxOfficeTb"


export default function BoxOffice() {

  const dailyBoxOfficeList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList
  const myItems = dailyBoxOfficeList.map(item =>
    <BoxOfficeTb rank = {item.rank}
    movieNm={item.movieNm}
    salesAmt={item.salesAmt}
    audiCnt={item.audiCnt}
    rankInten ={item.rankInten}
    />

  )

  return (
    
    <div>
      {myItems}
    </div>
  )
}
