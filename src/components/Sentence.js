import React from "react";
import { connect } from "react-redux";

const Sentence = ({ form }) => {
  if (!form) {
    return (
      <div className="ui info message">
        <div className="content">
          <div className="header">Your sentence is:</div>
        </div>
        <p>" "</p>
      </div>
    );
  }
  return (
    <div className="ui info message">
      <div className="content">
        <div className="header">Your sentence is:</div>
      </div>
      <p>
        {form.who} {form.what} {form.when} {form.where}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    form: state.form.questionForm.values,
  };
};
export default connect(mapStateToProps)(Sentence);
