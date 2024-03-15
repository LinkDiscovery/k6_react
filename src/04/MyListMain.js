import MyLIst from "./MyLIst"
import listData from "./MyListData.json"

export default function MyListMain() {


    const myItems = listData.map(item =>
        <MyLIst title={item.title}
                imgUrl={item.imgUrl}
                content={item.content}
                key = {item.title}
        />
    ) 


  return (
    <div className="w-10/12 grid grid-flow-col-1 md:grid-cols-2 gap-4">
        {myItems}
    </div>
  )
}
