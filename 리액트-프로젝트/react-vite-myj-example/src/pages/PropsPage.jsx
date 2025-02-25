import React from 'react'
import Hello from '../components/Hello'

const PropsPage = () => {
  /* 함수 이기 때문에 파라미터를 만들어서넘길수 있음 */
  const age = 3
  const name = '홍길동'
  return (
    <>
      <Hello name={name} age={age} color="red"></Hello>
      <Hello name={age} age={name} color="blue"></Hello>
    </>
  )
}

export default PropsPage