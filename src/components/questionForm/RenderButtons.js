import React from "react";

const RenderButtons = (props) => {
  const { previousPage, disablePrevious, disableNext, labelNext } = props;
  const stylePrevious = `ui ${disablePrevious} button`;
  const styleNext = `ui ${disableNext} positive button`;
  return (
    <div className="ui buttons">
      <button className={stylePrevious} type="button" onClick={previousPage}>
        Previous
      </button>
      <div className="or"></div>
      <button className={styleNext} type="submit">
        {labelNext}
      </button>
    </div>
  );
};

export default RenderButtons;
