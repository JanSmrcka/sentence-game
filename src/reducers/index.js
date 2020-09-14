import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import * as sentenceActions from "../actions";

const sentencesReducer = (state = [], action) => {
  if (action.type === sentenceActions.SAVE_SENTENCE) {
    return [...state, action.payload];
  }

  return state;
};

export default combineReducers({
  form: formReducer,
  sentences: sentencesReducer,
});
