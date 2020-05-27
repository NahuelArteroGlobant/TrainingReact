import React from "react";

import "./pageError.scss";

function PageError(props) {
  return <div>{props.error.message}</div>;
}

export default PageError;
