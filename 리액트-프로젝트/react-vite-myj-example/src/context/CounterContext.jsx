import { createContext, useState } from "react";

const CounterContext = createContext()

const CounterProvider = (props) =>{
    const [count, setcount] = useState(0)

    const increment =()=>{
        setcount(count+1)
    }

    const decrement=()=>{
        setcount(count-1)
    }

    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
          {props.children}
        </CounterContext.Provider>
      );
}

export {CounterContext, CounterProvider}