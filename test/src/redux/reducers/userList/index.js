import { ADD_USER, ADD_USER_SUCCESSFULLY, EDIT_USER, EDIT_USER_SUCCESSFULLY, GET_USERS, GET_USERS_SUCCESSFULLY } from "../../actions/types"

const initialState = {
    users: [],
    loading: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                loading: true
            }
        case GET_USERS_SUCCESSFULLY:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case ADD_USER:
            return {
                ...state,
                loading: true
            }
        case ADD_USER_SUCCESSFULLY:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case EDIT_USER:
            return {
                ...state,
                loading: true
            }
        case EDIT_USER_SUCCESSFULLY:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        default:
            return state
    }
}