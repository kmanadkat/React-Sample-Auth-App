import { combineReducers } from "redux";
import todos from './todo'
import auth from './auth'

export const rootReducer = combineReducers({
  todos,
  auth
})