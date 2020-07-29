import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
//import {buyCake} from './../redux/cake/cakeActions'
import {buyCake} from './../redux'

//const redux = require('redux');


class CakeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number : 1
        }
    }

    onChangeClick = (v) => {
        this.setState({number:v})

    }

    buyCake_ = (e, v) => {
        console.log("buyCake_ e ",e," v ",v, " == ",this.props)
        //this.props.dispatch(this.props.buyCakeBind(v))
        this.props.buyCakeBind(v)
    }
    render() {
        console.log(" =this.props== ",this.props)
        const {cake, buyCake, dispatch, buyCakeBind} = this.props;
        const {number } = this.state;
        console.log("redner ",this.props.cake," cake ",cake.numberOfCakes)
        return (
            <div>
                    
                    <h2> Number of Cake {cake.numberOfCakes}</h2>
                    <input name="totalCake" value = {number} onChange={ (e) => this.onChangeClick(e.target.value)}/>
                    <button onClick={ () => buyCake (number)}>Buy Cake</button> <br/>
                    <button onClick={ () => buyCakeBind (number)}>Buy Cake Bind</button> <br/>
                    <button onClick={ (e) => this.buyCake_ (e, number)}>Buy Cake Event</button>
            </div>
        );
    }
}

CakeContainer.propTypes = {

};

const mapsStateToProps = (state) =>{
    return {
        cake : state.cake
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        dispatch,
        buyCake : (number) => dispatch(buyCake(number)),
        //buyCake : dispatch(buyCake()) //Warning: Expected `onClick` listener to be a function, instead got a value of `object` type.
        buyCakeBind : bindActionCreators(buyCake, dispatch),
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(CakeContainer);

