import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
    
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
 
    const [incremetAmount,setIncrementAmount] = useState(0);
    let numberValue = Number(incremetAmount) || 0;    

  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())} >+</button>
            <button onClick={() => dispatch(decrement())} >-</button>
        </div>
        <input type="text"
                value={incremetAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div>
            <button onClick={() => dispatch(incrementByAmount(numberValue))} >Add Amount</button>
            <button onClick={() => {
                dispatch(reset())
                setIncrementAmount(0)
            }} >Reset All</button>
        </div>
    </section>
  )
}

export default Counter