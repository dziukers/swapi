import React from "react";
import CardsList from "./CardsList";

const LoadCharacters = ({ filteredCharacters, laser, characters, minLoadTimePassed }) => {
  console.log(minLoadTimePassed);
  if (characters.length < 60 || !minLoadTimePassed) {
    return (
      <div style={{ marginTop: '100px' }}>
        <div className="lightsaberContainer">
          <span className="loadingWord">Loading</span>
          <img src={laser} className="lightsaberHilt" alt="Lightsaber hilt" />
          <div className="lightsaberDiv" />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <CardsList characters={filteredCharacters} />
      </div>
    );
  }
};

export default LoadCharacters;
