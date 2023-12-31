import React from "react";
import "../loader.css";

const Loader = () => {
  return (
    <div className="loader-screen">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
