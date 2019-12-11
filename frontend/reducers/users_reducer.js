import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_USER, RECEIVE_USERS } from  "../actions/session_actions";
import { RECEIVE_FRIEND_REQUEST, ACCEPT_FRIEND_REQUEST, REMOVE_FRIEND_REQUEST } from "../actions/friend_request_actions"

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user } );
        case RECEIVE_USERS: 
            return Object.assign({}, state, action.payload.users )
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default UsersReducer;