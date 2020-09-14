import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import RenderButtons from "./RenderButtons";

const QuestionFormWho = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="who" type="input" component={renderField} label="Who?" />
      <RenderButtons disablePrevious="disabled" labelNext="Next" />
    </form>
  );
};

export default reduxForm({
  form: "questionForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(QuestionFormWho);
