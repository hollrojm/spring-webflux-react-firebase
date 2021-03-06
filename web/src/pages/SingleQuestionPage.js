import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import QuestionReviewForm from "../components/QuestionReviewForm";
import { fetchQuestion, deleteAnswer } from '../actions/questionActions'

import { Question } from '../components/Question'
import { Answer } from '../components/Answer'
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2'

const SingleQuestionPage = ({
  match,
  dispatch,
  redirect,
  question,
  hasErrors,
  loading,
  userId
}) => {
  const { id } = match.params
  useEffect(() => {
    dispatch(fetchQuestion(id))
  }, [dispatch, redirect, id])

  const onDelete = (id) => {
    Swal.fire({
        title: 'Esta seguro que quiere eliminar esta respuesta?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminala por favor!'
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch(deleteAnswer(id))
          Swal.fire(
            'Respuesta Eliminada!',
            'Correctamente'
          )
        }
      })
  }

  const renderQuestion = () => {
    if (loading.question) return <p>Loading question...</p>
    if (hasErrors.question) return <p>Unable to display question.</p>

    return <div>
    <Question question={question} />
    <QuestionReviewForm question={question} />
  </div>
  }

  const renderAnswers = () => {
    return (question.answers && question.answers.length) ? question.answers.map(answer => (
      <Answer key={answer.id} answer={answer} userId={userId} onDelete={onDelete} />
    )) : <p>Empty answer!</p>;
  }

  return(
    <section>
      {renderQuestion()}
      {userId && <Link to={"/answer/" + id} className=" text-center btn-view btn-info margin-right">
        Reply
      </Link>}

      <h2>Answers</h2>
      {renderAnswers()}
    </section>
  )
}

const mapStateToProps = state => ({
  question: state.question.question,
  loading: state.question.loading,
  hasErrors: state.question.hasErrors,
  redirect: state.question.redirect,
  userId: state.auth.uid
})

export default connect(mapStateToProps)(SingleQuestionPage)
