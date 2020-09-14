import React from "react";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div className="ui labeled input">
      <div className="ui label">{label}</div>
      <input {...input} placeholder={label} type={type} />
    </div>
    <div className="ui form error">
      <div className="ui small error message">
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  </div>
);

export default renderField;
