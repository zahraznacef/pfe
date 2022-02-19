import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"

import { registerReducer } from "../Auth/Redux/registerReducer";
import { signinReducer } from '../Auth/Redux/signinReducer';
import { adminLogInReducer } from '../Auth/Redux/adminLoginReducer'



const Reducers = combineReducers({

    // Interface Reducers
    registerStore : registerReducer,
    signinStore : signinReducer,
    adminstore : adminLogInReducer,

})

const store = createStore(Reducers, applyMiddleware(thunk));
export default store;
