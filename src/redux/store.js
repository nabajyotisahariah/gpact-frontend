import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import {cakeReducer}    from './cake/cakeReducer';
import {iceCreamReducer}    from './iceCream/iceCreamReducer';
import {UserReducer}    from './users/UserReducer';
import {LibraryReducer}    from './library/LibraryReducer';

//const logger = require('redux-logger');

const rootReducer = combineReducers({
             cake : cakeReducer, 
             iceCream : iceCreamReducer, 
             users : UserReducer,
             library : LibraryReducer
            });
const store = createStore ( rootReducer, applyMiddleware(logger, reduxThunk) );

//const store = createStore ( cake : cakeReducer);

export default store;