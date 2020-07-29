import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {buyIceCreamAction}  from '../redux/iceCream/iceCreamAction'
import {buyIceCreamAction}  from '../redux'

//const redux = require('redux');


class IceCreamContainer extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        
        const {iceCream, buyIceCreamAction} = this.props;
        console.log("redner ",this.props.iceCream," cake ",iceCream.totalIceCream)
        return (
            <div>
                    <h2> Number of ICE CREAME {iceCream.totalIceCream}</h2>
                    <button onClick={buyIceCreamAction}>Buy ICE CREAME</button>
            </div>
        );
    }
}

IceCreamContainer.propTypes = {

};

const mapsStateToProps = (state) =>{
    return {
        iceCream : state.iceCream
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        buyIceCreamAction : () => dispatch(buyIceCreamAction())
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(IceCreamContainer);

