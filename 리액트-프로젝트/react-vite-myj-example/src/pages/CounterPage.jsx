import React from 'react'
import Counter from '../components/Counter'
import CounterTwo from '../components/CounterTwo'

const CounterPage = () => {
  return (
    <div className='text-center mt-5'>
      <Counter />
      <hr/>
      <CounterTwo />
    </div>
    
  )
}

export default CounterPage