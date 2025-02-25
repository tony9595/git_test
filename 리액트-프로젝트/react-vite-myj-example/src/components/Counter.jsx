import React, { useState } from 'react'
// 1. 화면 갱신이 안되고 있음.
// state : 상태
// state 란 리액트가 관리하는 화면갱신용 변수
// 주의: 함수 호출과 이벤트 등록

const Counter = () => {

  //let number = 0
  const [number,setNumder] = useState(0)

  const onIncrease =()=>{
    //number = number + 1
    setNumder(number + 1)
    console.log(number)
  }
  const onDicrease =()=>{
    // 함수형식으로 넣을 수 있다. (함수형식으로 넣으면 더 빠르게 화면이 전환된다.)
    setNumder((number) => number - 1)
    console.log(number)
  }

  //prettier-ignore
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDicrease}>-1</button>
    </div>
  )
}

export default Counter