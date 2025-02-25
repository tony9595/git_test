import React, { useEffect, useState } from 'react'

// useEffect(() => {
//   // 매 렌더링마다 실행
// });

// useEffect(() => {
//   // 컴포넌트가 처음 렌더링된 실행
// }, []);

// useEffect(() => {
//   // 컴포넌트가 처음 렌더링된 이후 실행
//   // a나 b가 변경되어 컴포넌트가 재렌더링된 이후 실행
// }, [a, b]);

const UseEffectPage = () => {
  const [firstCount,setFirstCount] = useState(0)
  const [secondCount,setSecondCount] = useState(0)

  // useEffect(()=>{
  //   console.log(`매랜더링 마다 실행${Date()}`);
  // })

  useEffect(()=>{
    // 컴포넌트가 처음 랜더링 될때만 (created 될때만)
    console.log(`처음 랜더링 될때만 실행${Date()}`);
  },[])

  useEffect(()=>{
        // 컴포넌트가 처음 렌더링된 이후 실행
    //  a나 b가 변경되어 컴포넌트가 재렌더링된 이후 실행
    console.log(`컴포넌트 변경 ${Date()}`);
  },[firstCount,secondCount])


  const firstCountHandler = () =>{
    setFirstCount((s) => s+1)
  }

  const secondCountHandler = () =>{
    setSecondCount((s) => s+1)
  }


  return (
    <div className='text-center mt-5'>
      <h1>{firstCount}</h1>
      <button onClick={firstCountHandler}>카운터 증가</button>
      <h1>{secondCount}</h1>
      <button onClick={secondCountHandler}>카운터 증가</button>
    </div>
  )
}

export default UseEffectPage