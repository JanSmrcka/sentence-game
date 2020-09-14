import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import RenderButtons from "./RenderButtons";

const QuestionFormWhen = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="when" type="text" component={renderField} label="When?" />
      <RenderButtons previousPage={previousPage} labelNext="Next" />
    </form>
  );
};

export default reduxForm({
  form: "questionForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(QuestionFormWhen);
