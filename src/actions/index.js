import history from "../history";
export const SAVE_SENTENCE = "SAVE_SENTENCE";

export const saveSentence = (formValues) => {
  history.push("/");
  return {
    type: SAVE_SENTENCE,
    payload: formValues,
  };
};
