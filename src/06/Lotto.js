import TailButton from "../UI/TailButton"
import TailBall from "../UI/TailBall"
import { useState } from "react"


export default function Lotto() {


    const [lottonum, setlottonum] = useState();
    const handleLottoClick = () => {


        let nums = []
        while (nums.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1
            if (!nums.includes(n)) nums.push(n)
        }

        const myItems = nums.map((items,idx) => {
            if (idx === 5)
                return <>
                    <TailBall key={`ball${items}`} n={items} />
                    <div className="text-6xl">+</div>
                </>
            else
                return <TailBall key={`ball${items}`} n={items} />

        })
        setlottonum(myItems)
    }


    return (
        <div className="flex flex-col 
                        justify-center items-center
                        w-full h-full" >
            <div className="flex flex-row justify-center items-center">
                {lottonum}
            </div>
            <div >
                <TailButton caption='로또번호생성'
                    color='blue'
                    handleClick={handleLottoClick} />
            </div>
        </div>
    )
}
