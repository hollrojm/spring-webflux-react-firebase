import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchOwnerQuestions, deleteQuestion } from '../actions/questionActions'
import { Question } from '../components/Question'
import Swal from 'sweetalert2'

const OwnerQuestionsPage = ({ dispatch, loading, questions, hasErrors, redirect, userId }) => {
    useEffect(() => {
        dispatch(fetchOwnerQuestions(userId))
    }, [dispatch, userId]);

    useEffect(() => {
        if (redirect) {
            dispatch(fetchOwnerQuestions(userId))
        }
    }, [redirect, dispatch, userId]);

    const onDelete = (id) => {
        Swal.fire({
            title: 'Esta seguro que quiere eliminar esta pregunta?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminala por favor!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteQuestion(id))
              Swal.fire(
                'Pregunta Eliminada!',
                'Correctamente'
              )
            }
          })
    }
    const renderQuestions = () => {
        if (loading) return <p>Loading questions...</p>
        if (hasErrors) return <p>Unable to display questions.</p>

        return questions.map(question => <Question
            key={question.id}
            question={question}
            excerpt onDelete={onDelete} />)
    }

    return (
        <section>
            <h1>Questions</h1>
            {renderQuestions()}
        </section>
    )
}

const mapStateToProps = state => ({
    loading: state.question.loading,
    questions: state.question.questions,
    hasErrors: state.question.hasErrors,
    redirect: state.question.redirect,
    userId: state.auth.uid
})

export default connect(mapStateToProps)(OwnerQuestionsPage)
