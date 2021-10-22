import React from "react";
import { connect } from "react-redux";
import { postReview } from "../actions/questionActions";
import { useForm } from "react-hook-form";
import Rating from "./Rating";

function QuestionReviewForm({ question, user, dispatch, loading, hasErrors }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(postReview(data.review, question.id, user));
  };
//Evaluar vista segun user
  const renderQuestions = () => {
    console.log(question.userReviews);
    return question.userReviews?.includes(user);
  };
  if (loading) return <p>Loading ...</p>;
  if (hasErrors) return <p>Unable to display questions.</p>;

  return (
    <section>
      <h1>Questions</h1>
      {renderQuestions() || user === null ? (
        <div>
          Average question rating: <Rating question={question} />
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
          <div className="col-5">
          <label htmlFor="review">Question rating</label>
          <select className=" form-control text-center"{...register("review")} id="">
            <option value=""> Select...</option>
            <option value="1">{`\u{1f641}`}</option>
            <option value="2"> {`\u{1f610}`}</option>
            <option value="3"> {`\u{1f600}`}</option>
          </select>
          </div>
          <button type="submit" className=" btn-send-rating btn-success right">
            Send review
          </button>
          </div>
          
        </form>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  loading: state.question.loading,
  hasErrors: state.question.hasErrors,
  question: state.question.question,
  user: state.auth.uid,
});

export default connect(mapStateToProps)(QuestionReviewForm);