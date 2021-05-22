import {LOGIN_USER, LOGOUT_USER} from '../actions/auth'

const auth = (state = null, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return payload;

    case LOGOUT_USER:
      return payload;
      
    default:
      return state
  }
}

export default auth;