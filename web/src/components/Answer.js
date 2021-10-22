import React from 'react'

export const Answer = ({ answer, userId, onDelete }) => (
  <aside className="answer mt-5">
    <div dangerouslySetInnerHTML={{__html:answer.answer}} />
    {answer.userId === userId&&<button className="btn btn-danger " onClick={() => onDelete(answer.id)}>DELETE</button>}
  </aside>
)
