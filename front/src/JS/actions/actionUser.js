import axios from 'axios'
import { GET_USERS, GET_USER_BY_ID } from '../constants/actionsTypes'

export const getUsers = () => (dispatch) => {
    axios.get("/api/users/get")
        .then(res => dispatch({ type: GET_USERS, payload: res.data }))
        .catch(err => console.log(err))
}

export const getUserById = (id) => (dispatch) => {
    axios.get(`/api/users/get/${id}`)
        .then(res => dispatch({ type: GET_USER_BY_ID, payload: res.data }))
        .catch(err => console.log(err))
}

export const addUser = (newUser) => (dispatch) => {
    axios.post("/api/users/post", newUser)
        .then(() => dispatch(getUsers()))
        .catch(err => console.log(err))
}

export const deleteUser = (id) => (dispatch) => {
    axios.delete(`/api/users/delete/${id}`)
        .then(() => dispatch(getUsers()))
        .catch(err => console.log(err))
}

export const editUserById = (id, editUser) => (dispatch) => {
    axios.put(`/api/users/update/${id}`, editUser)
        .then(() => dispatch(getUsers()))
        .catch(err => console.log(err))
}
