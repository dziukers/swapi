import React from "react";

const SwitchPlanetPicture = ({ homeworld }) => {
  try {
    return (
      <div className="planetPhoto">
        <img src={require(`./Images/${homeworld}.png`)} alt="homeworld" />
        <img
          className="magnifier"
          src={require("./Images/Magnifier.png")}
          alt="check planet info"
        />
      </div>
    );
  } catch (err) {
    return (
      <div className="planetPhoto">
        <img
          src={require(`./Images/Alderaan.png`)}
          style={{ filter: "grayscale(100%) blur(1px)" }}
          alt="homeworld"
        />
        <img
          className="magnifier"
          src={require("./Images/Magnifier.png")}
          alt="check planet info"
        />
        <span className="Popup-questionMark">?</span>
      </div>
    );
  }
};

export default SwitchPlanetPicture;
