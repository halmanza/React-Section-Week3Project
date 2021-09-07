import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

//Will display well Fetching from API

const Loader = () => {
  const spinnerAction = () => {
    return (
      <div>
        <FontAwesomeIcon
          icon={faSun}
          spin
          size="8x"
          style={{ color: "black" }}
        />
        <br />
        <h3>Loading...</h3>
      </div>
    );
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {spinnerAction()}
    </div>
  );
};

export default Loader;
