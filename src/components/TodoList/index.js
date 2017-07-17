import React from 'react'
import _ from 'lodash'
import contain from './contain'

const render = (props) => {
  const {
    todos,
    filter,
    toggleCompleted,
    removeTodo,
    setFilter
  } = props

  //const filterdTodos = _.map(todos, (todo) => {
  //  if (filter === 1) {
  //    return todo
  //  }

  //  if (filter === 2) {
  //    if (todo.isCompleted === false) {
  //      return todo
  //    }
  //  }

  //  if (filter === 3) {
  //    if (todo.isCompleted === true) {
  //      return todo
  //    }
  //  }
  //})

  return (
    <div>
      <select
        value={filter}
        onChange={(e)=>{setFilter(e.target.value)}}
      >
        <option value={1}>All</option>
        <option value={2}>Not completed</option>
        <option value={3}>Completed</option>
      </select>
      <ul>
        {_.map(todos, (todo) => {
        return <li key={todo.id}>
          <span
          onClick={() => {
            toggleCompleted(todo.id)
          }}
          style={todo.isCompleted ? {textDecoration: 'line-through'}:null}
        >
          {todo.body}
          </span>
          <button
            type="button"
            onClick={()=>{
              removeTodo(todo.id)
              }}
          >X</button>
        </li>
        })}
      </ul>
    </div>
  )
}

export default contain(render)
