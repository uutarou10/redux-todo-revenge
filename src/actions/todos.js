let nextId = 0
export const addTodo = (body) => {
  return {
    id: nextId++,
    type: 'ADD_TODO',
    payload: body
  }
}

export const toggleCompleted = (id) => {
  return {
    type: 'TOGGLE_COMPLETED',
    payload: id
  }
}

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    payload: id
  }
}

export const setDraftText = (text) => {
  return {
    type: 'SET_DRAFT_TEXT',
    payload: text
  }
}

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    payload: filter
  }
}
