import axios from 'axios'
import { ADD_USER, ADD_USER_SUCCESSFULLY, DELETE_USER, DELETE_USER_SUCCESSFULLY, EDIT_USER, EDIT_USER_SUCCESSFULLY, GET_USERS, GET_USERS_SUCCESSFULLY } from "./types"

// get
export const getUser = () => {
    return { type: GET_USERS, payload: null }
}

export const getUserSuccessFully = (data) => {
    return { type: GET_USERS_SUCCESSFULLY, payload: data }
}

// Add
export const addUser = () => {
    return { type: ADD_USER, payload: null }
}

export const addUserSuccessFully = (data) => {
    return { type: ADD_USER_SUCCESSFULLY, payload: data }
}

// Edit
export const editUser = () => {
    return { type: EDIT_USER, payload: null }
}

export const editUserSuccessFully = (data) => {
    return { type: EDIT_USER_SUCCESSFULLY, payload: data }
}

// Delete
export const deleteUser = () => {
    return { type: DELETE_USER, payload: null }
}

export const deleteUserSuccessFully = (data) => {
    return { type: DELETE_USER_SUCCESSFULLY, payload: data }
}

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(getUser());
        try {
            const response = await axios('http://localhost:5000/users');
            dispatch(getUserSuccessFully(response?.data));
        } catch (error) {
            // dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
        }
    }
}

export const addUserData = (params) => {
    return async (dispatch) => {
        dispatch(addUser());
        try {
            const response = await axios.post('http://localhost:5000/users', params);
            const data = await response.json();
            dispatch(addUserSuccessFully(data));
        } catch (error) {
            // dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
        }
    }
}


export const editUserData = (params) => {
    return async (dispatch) => {
        dispatch(addUser());
        try {
            const response = await axios.put(`http://localhost:5000/users/${params?.id}`, params);
            const data = await response.json();
            dispatch(addUserSuccessFully(data));
        } catch (error) {
            console.log("err")
        }
    }
}

export const deleteUserData = (params) => {
    return async (dispatch) => {
        dispatch(deleteUser());
        try {
            const response = await axios.delete(`http://localhost:5000/users/${params?.id}`);
            const data = await response.json();
            dispatch(deleteUserSuccessFully(data));
        } catch (error) {
            console.log("err")
        }
    }
}