import { combineReducers } from 'redux'
import { userReducer } from './userList';

const rootReducer = combineReducers({
    users: userReducer
})


export default rootReducer