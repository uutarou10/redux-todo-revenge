import React from 'react';
import contain from './contain'

const render = (props) => {
  const {
    addTodo,
    setDraftText,
    draftText
  } = props

  return (
    <div>
      <input
        type="text"
        onChange={(e)=>{
          setDraftText(e.target.value)
        }}
        value={draftText}
      />
      <button
        type="button"
        onClick={()=>{
          addTodo(draftText)
          setDraftText('')
        }}
      >Add</button>
    </div>
  )
}

export default contain(render)
