const validate = (values) => {
  const errors = {};
  if (!values.who) {
    errors.who = "Required";
  }
  if (!values.what) {
    errors.what = "Required";
  }
  if (!values.when) {
    errors.when = "Required";
  }
  if (!values.where) {
    errors.where = "Required";
  }

  return errors;
};

export default validate;
