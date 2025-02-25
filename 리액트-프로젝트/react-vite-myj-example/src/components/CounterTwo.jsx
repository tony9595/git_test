import React, { useState } from 'react'

const CounterTwo = () => {

  const [number,setNumder] = useState(0)

  const onIncrease =()=>{

    setNumder((number) => number + 2)
    console.log(number)
  }
  const onDicrease =()=>{

    setNumder((number) => number - 2)
    console.log(number)
  }
  //prettier-ignore
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+2</button>
      <button onClick={onDicrease}>-2</button>
    </div>
  )
}

export default CounterTwo