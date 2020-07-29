import {BUY_ICE_CREAM} from './iceCreameType';

const initialState = {
    totalIceCream : 100,
    name:'ABC'
}
export const iceCreamReducer = (state = initialState , action) => {

    switch(action.type) {
        case BUY_ICE_CREAM:{
            return {
                ...state,
                totalIceCream : state.totalIceCream -1
            }
        }
        default:
            return state;
    }

}