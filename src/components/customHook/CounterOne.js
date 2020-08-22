import React from 'react';
import Counter from './Counter';

function CounterOne(props) {

    const [count,  setCount, increament, decreament, reset]  = Counter(1, 1);
    
    return (
        <div>
            Count {count}
            <button onClick = {increament}>Increment</button>
            <button onClick = {decreament}>Decrement</button>
            <button onClick = {reset}>Reset</button>
        </div>
    );
}

export default CounterOne;