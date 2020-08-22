import React, { useEffect, useRef, useState } from 'react';

function FocusInput(props) {

    const [timer, setTimer] = useState(0); 
    const inputRef  = useRef(null);
    const intervalRef  = useRef(null);

    useEffect( () => {
        inputRef.current.focus();
        console.log(" => ",inputRef.current);

        /*const interval = setInterval( () => {
            setTimer( prev => prev + 1)
        }, 1000);*/

        intervalRef.current = setInterval( () => {
            setTimer( prev => prev + 1);
            //console.log("intervalRef.current ",timer," inputRef.current ",inputRef.current.value," inputRef ",inputRef)
            inputRef.current.value = "Naba"
        }, 1000);

        return () => {
            console.log("Clear interval")
            clearInterval(intervalRef.current);
        }
    }, [])

    return (
        <div>
            Ref Autofocus <input ref={inputRef} type="text"/>
            <br/>
            Timer {timer} <button onClick={()=>clearInterval(intervalRef.current)}>Clear Interval</button>
        </div>
    );
}

export default FocusInput;