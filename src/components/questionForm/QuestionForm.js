import React from "react";
import { connect } from "react-redux";
import { destroy } from "redux-form";

import QuestionFormWho from "./QuestionFormWho";
import QuestionFormWhat from "./QuestionFormWhat";
import QuestionFormWhen from "./QuestionFormWhen";
import QuestionFormWhere from "./QuestionFormWhere";
import { saveSentence } from "../../actions";

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  submitForm(values) {
    this.props.saveSentence(values);
    this.props.destroy("questionForm");
  }

  render() {
    const { page } = this.state;
    return (
      <div className="ui form">
        <div className="field">
          {page === 1 && <QuestionFormWho onSubmit={this.nextPage} />}
          {page === 2 && (
            <QuestionFormWhat
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />
          )}
          {page === 3 && (
            <QuestionFormWhen
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />
          )}
          {page === 4 && (
            <QuestionFormWhere
              previousPage={this.previousPage}
              onSubmit={this.submitForm}
            />
          )}
        </div>
      </div>
    );
  }
}

export default connect(null, { saveSentence, destroy })(QuestionForm);
