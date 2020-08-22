import React from 'react';
import Counter from './Counter';



function CounterTwo(props) {

    //const initialState  = 0;
    //const [count, setCount]   = useState(initialState);
    const [count,  setCount, increament, decreament, reset]  = Counter(100, 10);   

    return (
        <div>
            Count {count}
            <button onClick = {increament}>Increment</button>
            <button onClick = {decreament}>Decrement</button>
            <button onClick = {reset}>Reset</button>
        </div>
    );
}

export default CounterTwo;