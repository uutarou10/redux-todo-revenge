import _ from 'lodash'
import { combineReducers } from 'redux'

const todos = (state = [], action) => {
  if(action.type === 'ADD_TODO'){
    return [
      ...state,
      {
        id: action.id,
        body: action.payload,
        isCompleted: false
      }
    ]
  }

  if(action.type === 'TOGGLE_COMPLETED') {
    return _.map(state, (todo) => {
      if(todo.id === action.payload) {
        return {
          id: todo.id,
          body: todo.body,
          isCompleted: !todo.isCompleted
        }
      }
      return todo
    })
  }

  if(action.type === 'REMOVE_TODO') {
    return _.remove(state, (todo) => {
      return todo.id !== action.payload
    })
  }

  return state
}

const draftText = (state = '', action) => {
  if(action.type === 'SET_DRAFT_TEXT') {
    return action.payload
  }

  return state
}

const filter = (state = 1, action) => {
  if(action.type === 'SET_FILTER') {
    return action.payload
  }

  return state
}

export const getTodo = (state) => state.todos.todos
export const getDraftText = (state) => state.todos.draftText
export const getFilter = (state) => state.todos.filter

export default combineReducers({
  todos,
  draftText,
  filter
})
