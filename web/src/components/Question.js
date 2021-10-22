import React from 'react'
import { Link } from 'react-router-dom'

export const Question = ({ question, excerpt, onDelete, setCategorySearch }) => {
  

  const handleCategorySearch = (e)=>{
    setCategorySearch(question.category)
  }
  
  
  
  return <article className={excerpt ? 'question-excerpt' : 'question'}>
            <h2><div dangerouslySetInnerHTML={{__html:question.question}} /></h2>
            {setCategorySearch?
            <p className="categorySearch" onClick={handleCategorySearch}>{question.category}  - <small>{question.type}</small></p>:
            <p>{question.category}  - <small>{question.type}</small></p>}
          
            {onDelete && (
              <button className="btn-delete btn-danger" onClick={() => onDelete(question.id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
            )}
            {excerpt && (
              <Link to={`/question/${question.id}`} className=" text-center btn-view btn-info">
                View Question
              </Link>
            )}
          </article>
}
