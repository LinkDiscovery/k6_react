import MyLIst from "./MyLIst"
import listData from "./MyListData.json"

export default function MyListMain() {
    console.log(listData)

    const myItems = listData.map(item =>
        <MyLIst title={item.title}
                imgUrl={item.imgUrl}
                content={item.content}
        />
    ) 


  return (
    <div className="w-10/12 grid grid-flow-col-1 md:grid-cols-2 gap-4">
        {myItems}
    </div>
  )
}
