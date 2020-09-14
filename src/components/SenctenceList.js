import React from "react";
import { connect } from "react-redux";

const SentenceList = ({ sentences }) => {
  return sentences.map((sentence) => {
    return (
      <div key={sentence.who}>
        <div className="ui floating message">
          <p>{`${sentence.who} ${sentence.what} ${sentence.when} ${sentence.where}`}</p>
        </div>
      </div>
    );
  });
};

const mapStateToProps = (state) => {
  return {
    sentences: state.sentences,
  };
};
export default connect(mapStateToProps, {})(SentenceList);
