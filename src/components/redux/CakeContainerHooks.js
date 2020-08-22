import React, {useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux'
import {buyCake} from '../../redux/cake/cakeActions'

//CakeContainerHooks.propTypes = {};

function CakeContainerHooks(props) {

    const [count, setCount] = useState(0);
    const cake = useSelector( state => state.cake);
    const dispatch = useDispatch();


    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        
      });

      useEffect(() => {
        // Update the document title using the browser API
        console.log(`You clicked ${count} times`)
        if(count == 5) {
          console.log(`You clicked ${count} crashed `)
          //throw new Error('I crashed!');
        }
      });
    
    return (
      
        <div>
            <h2>Hooks Dispatch Number of Cake  {cake.numberOfCakes}  </h2>
            <button onClick={ () => dispatch(buyCake(1))}>On Click</button>

            <div>
                 <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                   Hooks State Click me
                </button>
            </div>
        </div>
    );
}

export default CakeContainerHooks;