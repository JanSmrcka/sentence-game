import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import RenderButtons from "./RenderButtons";

const QuestionFormWhat = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="what" type="text" component={renderField} label="What?" />
      <RenderButtons previousPage={previousPage} labelNext="Next" />
    </form>
  );
};

export default reduxForm({
  form: "questionForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(QuestionFormWhat);
