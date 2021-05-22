import { generateUID } from "../utils/helper"

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const handleAddTodo = (todo) => ({
  type: ADD_TODO,
  payload: {
    id: generateUID(),
    title: todo,
    completed: false
  }
})

export const handleDeleteTodo = (todoId) => ({
  type: DELETE_TODO,
  payload: todoId
})

export const handleToggleTodo = (todoId) => ({
  type: TOGGLE_TODO,
  payload: todoId
})