import { GET_USERS, GET_USER_BY_ID } from "../constants/actionsTypes";


const initialState = {
    users: [],
    userId:{}
}

const reducerUser = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload }

        case GET_USER_BY_ID:
            return { ...state, userId: action.payload[0] }

        default:
            return state;
    }
}

export default reducerUser