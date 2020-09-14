import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import RenderButtons from "./RenderButtons";

const QuestionFormWhere = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="where" type="text" component={renderField} label="Where?" />
      <RenderButtons previousPage={previousPage} labelNext="Submit" />
    </form>
  );
};

export default reduxForm({
  form: "questionForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(QuestionFormWhere);
