import React, { Children } from "react";
import "./Center.css";

function Center(props) {
  const { children } = props;
  return <div className="center"> {children} </div>;
}

export default Center;
