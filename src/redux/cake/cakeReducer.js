import {BUY_CAKE} from './cakeTypes'

const initialState = {
    numberOfCakes:10
}

/*const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: 
            return {
                ...state, 
                cake : state.cake - 1
            }
        default:
            return state;    
    }
}
export default cakeReducer;*/

export const cakeReducer = (state = initialState, action) => {
    console.log("action ",action)
    switch(action.type) {
        case BUY_CAKE: 
            return {
                ...state, 
                numberOfCakes : state.numberOfCakes - action.payload
            }
        default:
            return state;    
    }
}