import * as Types from './LibraryType'

var initialState = {
    loading: false,
    data : [],
    error : null
}
export const LibraryReducer = (state = initialState, action) => {
    console.log("userReducer ",state," action ",action.type)
    switch(action.type) {
        case Types.LIBRARY_REQUEST:
            return {
                ...state,
                loading : true
            }
        case Types.LIBRARY_SUCCESS:
            return {
                loading : false,
                data : action.payload,
                error : null
            }
        case Types.LIBRARY_FAILURE:
            return {
                loading : false,
                data : [],
                error : action.payload
            }    
        default:
            return state
    }
}