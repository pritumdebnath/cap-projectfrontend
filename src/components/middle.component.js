import React from "react";
import "../components/style/middle.style.css";
import Weather from "./Weather";

const Middle = () => {
  return (
    <div className="container-fluid middle text-center p-3">
      <h3 className="p-3 text-white">Cincinnati Weather</h3>
      <Weather /> 
    </div>
  );
};

export default Middle;
