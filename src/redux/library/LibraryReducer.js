import * as Types from './LibraryType'

var initialState = {
    loading: false,
    data : [],
    error : null,
    libraryList:[],
    booksList:{},
    isPopupOpen:false
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
                ...state,
                loading : false,
                libraryList : action.payload,
                error : null
            }
        case Types.LIBRARY_FAILURE:
            return {
                ...state,
                loading : false,
                libraryList : [],
                error : action.payload
            }    
        case Types.GET_POPUP_OPEN:
            return {
                ...state,
                loading : false,
                isPopupOpen : action.payload
            }        
        case Types.GET_BOOKS_POPULATE:
                return {
                    ...state,
                    loading : false,
                    booksList : action.payload
                }           
            
        default:
            return state
    }
}