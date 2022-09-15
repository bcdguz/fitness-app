import * as APIUTIL from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// actions
const loginUser = (user) => (
  {
    type: RECEIVE_CURRENT_USER,
    user
  }
);

const logoutUser = () => (
  {
    type: LOGOUT_CURRENT_USER
  }
);

const receiveErrors = (errors) => (
  {
    type: RECEIVE_ERRORS,
    errors
  }
);

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
};

// thunk action creators
export const login = (user) => (dispatch) => {
  APIUTIL.login(user)
    .then((user) => dispatch(loginUser(user)))
    .fail((errors) => dispatch(receiveErrors(errors)))
};

export const logout = () => (dispatch) => {
  APIUTIL.logout()
    .then(() => dispatch(logoutUser()))
    .fail((errors) => dispatch(receiveErrors(errors)))
};

export const signup = (user) => (dispatch) => {
  APIUTIL.signup(user)
    .then((user) => dispatch(loginUser(user)))
    .fail((errors) => dispatch(receiveErrors(errors)))
};
