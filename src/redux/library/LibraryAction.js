import * as Types from './LibraryType'
//import axios from 'axios';
const axios = require('axios').default;

export const libraryFetchAction = () => {
    return {
        type : Types.LIBRARY_REQUEST
    }
}

export const librarySuccessAction = (libraryInfo) => {
    return {
        type :  Types.LIBRARY_SUCCESS,
        payload : libraryInfo
    }
}

export const libraryFailureAction = (err) => {
    return {
        type : Types.LIBRARY_FAILURE,
        payload : err
    }
}


export const libraryAsyncAction = () => {
    return (dispatch) => {
        dispatch(libraryFetchAction());
        axios.get(  'http://localhost:9090/library/getall', 
                    //{ params: {id: 12345}}
                )
        .then( _response => {
            //console.log("libraryAsyncAction = ", _response);
            const response = _response.data;
            const libraryInfo =  response.status ? response.data : []; 
            dispatch( librarySuccessAction(libraryInfo));
        })
        .catch( error => {
            console.log(error);
            dispatch(libraryFailureAction(error));
        })
        .finally(function () {
            // always executed
        });  
    }
}
