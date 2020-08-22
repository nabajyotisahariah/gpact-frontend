import {useState} from 'react';

function Counter(initialState, increment) {
    
    //const initialState  = 0;
    const [count, setCount]   = useState(initialState);

    const increament   = ()  => {
        setCount (count + increment)
    }

    const decreament   = ()  => {
        setCount (count - increment)
    }

    const reset   = ()  => {
        setCount (initialState)
    }

    return [count,  setCount, increament, decreament, reset];
}

export default Counter;