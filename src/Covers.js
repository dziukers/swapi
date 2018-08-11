import React from "react";
import "./App.css";
const covers = ({ boolean, cover }) => {
  return boolean.map((bool, i) => {
    if (bool) {
      return (
        <div className="Popup-coverOn">
          <img src={require(`./Images/${cover[i]}.jpg`)} alt="film cover" />
        </div>
      );
    } else {
      return (
        <div className="Popup-coverOff">
          <img src={require(`./Images/${cover[i]}.jpg`)} alt="film cover" />
        </div>
      );
    }
  });
};

export default covers;
