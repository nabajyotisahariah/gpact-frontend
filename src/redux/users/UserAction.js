import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from './UserType'
import axios from 'axios';
//const axios = require('axios');

export const fetchRequestAction = () => {
    return {
        type : FETCH_USER_REQUEST
    }
}

export const successRequestAction = (users) => {
    return {
        type : FETCH_USER_SUCCESS,
        payload : users
    }
}

export const failureRequestAction = (err) => {
    return {
        type : FETCH_USER_FAILURE,
        payload : err
    }
}


//export const asyncRequestAction = () => (dispatch)=> { // Not working
export const asyncRequestAction = () => {    
    return (dispatch) => {
        dispatch(fetchRequestAction());
        axios.get('https://jsonplaceholder.typicode.com/users', {})
        .then( response => {
            //console.log(response);
            const users = response.data.map( user => user.name); 
            dispatch( successRequestAction(users));
        })
        .catch( error => {
            console.log(error);
            dispatch(failureRequestAction(error));
        })
        .finally(function () {
            // always executed
        });  
    }
}
