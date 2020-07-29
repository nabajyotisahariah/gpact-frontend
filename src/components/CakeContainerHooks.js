import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux'
import {buyCake} from './../redux/cake/cakeActions'

CakeContainerHooks.propTypes = {
    
};

function CakeContainerHooks(props) {

    const cake = useSelector( state => state.cake);
    const dispatch = useDispatch();
    
    return (
        <div>
            <h2>Hooks Number of Cake  {cake.numberOfCakes}  </h2>
            <button onClick={ () => dispatch(buyCake(1))}>On Click</button>
        </div>
    );
}

export default CakeContainerHooks;