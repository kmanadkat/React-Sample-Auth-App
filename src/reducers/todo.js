import {todos} from '../utils/_DATA'
import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from '../actions/todo'

const initialState = todos

const todo = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        [payload.id]: payload,
        ...state
      }

    case DELETE_TODO:
      return Object.keys(state).reduce((acc, todoId) => {
        if(todoId !== payload)
          acc[todoId] = state[todoId];
        return acc;
      }, {})

    case TOGGLE_TODO:
      return {
        ...state,
        [payload] : {
          ...state[payload],
          completed: !state[payload].completed
        }
      }

    default:
      return state
  }
}

export default todo