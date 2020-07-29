import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from './UserType'

var initialState = {
    loading: false,
    data : [],
    error : null
}
export const UserReducer = (state = initialState, action) => {
    //console.log("userReducer ",state," action ",action.type)
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading : true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading : false,
                data : action.payload,
                error : null
            }
        case FETCH_USER_FAILURE:
            return {
                loading : false,
                data : [],
                error : action.payload
            }    
        default:
            return state
    }
}