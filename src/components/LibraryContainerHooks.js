import React, {useState, useEffect, useContext, useReducer} from 'react';
import ReactDOM from 'react-dom';
import {UserContext, ChannelContext} from '../App';

const intialState   = 0;
const reducer   = (state, action) => {
    switch(action) {
        case 'increment':
            return state +  1;
        case 'decrement':
            return state -  1;   
        case 'reset':
             return intialState;           
        default:
            return state;         
    }
}

function LibraryContainerHooks(props) {

    const intialCount = 0;
    const [count, setCount]  = useState(intialCount);
    const [name, setName]  = useState({'firstName':'', 'lastName':''});
    const [x, setX]    = useState(0);
    const [y, setY]    = useState(0);
    
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    const [ countR, dispatch ] = useReducer(reducer, intialState);
    //console.log("00000",  useReducer(reducer, intialState))

    const logMousePosition = (e)  => {
        //console.log("logMousePosition ",e.clientX,"  ",e.clientY)
        //ReactDOM.createPortal(`logMousePosition ${e.clientX} - ${e.clientY}`, document.getElementById("mouseCounterId"))
        ReactDOM.createPortal(<div>Hi...</div>, document.getElementById("mouseCounterId"))
    }
    useEffect ( () => {
        console.log("useEffect called onload");
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log("Component unmount fire")
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    useEffect ( () => {
        console.log(`useEffect called count ${count}`)
    }, [count])

    useEffect ( () => {
        console.log(`useEffect called count ${JSON.stringify(name)}`)
    }, [name])

    const incrementFive = ()  => {
        for(let i = 0 ; i < 5 ; i++) {
            setCount( prev => prev + 1);
        }
    }
    const reset = ()  => {
        setCount(intialCount);
    }

    return (
        <div>
            Cunt {count}  - Context {user} - {channel} 
            <br/>
            Mouse Couter <div id="mouseCounterId"></div>
            <br/>
            <button onClick={ () => setCount(count+1)}>Up</button>
            <button onClick={ () => setCount(count-1)}>Down</button>
            <button onClick={ incrementFive}>Increment 5</button>
            <button onClick={ reset}>Reset</button>
            <br/>
            FirstName {name.firstName } Lastname {name.lastName} - {JSON.stringify(name)}
            <br/>
            <input type="text" value={name.firstName} onChange={(e) => setName({...name, firstName : e.target.value})}/>
            <input type="text" value={name.lastName} onChange={(e) => setName({...name, lastName : e.target.value})}/>
            <br/>useReducer count {countR} <br/>
            <button onClick={ () => dispatch('increment')}>Up</button>
            <button onClick={ () => dispatch('decrement')}>Down</button>            
            <button onClick={ () => dispatch('reset')}>Reset</button>
        </div>
    );
}

export default LibraryContainerHooks;