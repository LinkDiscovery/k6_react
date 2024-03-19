

export default function TailBall({n}) {
    const bColor = [
        'bg-red-800',
        'bg-yellow-800',
        'bg-lime-800',
        'bg-blue-800',
        'bg-purple-800'

]

    const ballColor = `w-20 h-20 m-2 flex justify-center items-center rounded-full
                        ${bColor[parseInt(n/10)]} text-white
                        font-bold text-3xl`
  return (
    <div className= {ballColor}>
      {n}
    </div>
  )
}
