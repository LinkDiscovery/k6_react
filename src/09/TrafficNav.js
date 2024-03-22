import TailButton from "../UI/TailButton"
export default function TrafficNav({title, categoty, sel,setSel}) {//대분류 정한것 , 
    const handlebtClick = (item) => {
        setSel(item)
    }
    const bts = categoty.map(item =>
        <TailButton caption={item}
                    color = {item ===sel ? "red" : "blue"}
                    key ={item}
                    handleClick={()=> handlebtClick(item)}
        />
        )
    return (



    <div className="w-11/12 flex justify-between items-center">
      <div >
        <h1 className="text-xl font-bold">
            교통사고 {title}
        </h1> 
      </div>
      <div>
        {bts}
      </div>
    </div>
  )
}
