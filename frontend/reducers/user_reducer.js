import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user
      return newState;
    default:
      return state;
  }
}

export default userReducer;
