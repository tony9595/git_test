import React, { createContext, useContext, useState } from 'react'

const HelloContext = createContext("안녕하세요")

const ContextUsedPage = () => {
  const [value,setValue] = useState(true)
  return (
    <>
      <HelloContext.Provider value={value?'👍':'👎'}>
        <GrandParent value='안녕하세요'></GrandParent>
        <button onClick={()=> setValue(!value)}>click me!</button>
      </HelloContext.Provider>
    </>
  )
}

function GrandParent() {
  return <Parent />;
}

function Parent() {
  return <Child/>;
}

function Child() {
  const text = useContext(HelloContext);
  return <div>컨택스트에서 받아온 데이터 : {text}</div>
}

// function Child() {
//   return(
//     <HelloContext.Consumer>{
//       (value) => <div>안녕하세요 : {value}</div>}
//     </HelloContext.Consumer>
//   )
// }

export default ContextUsedPage