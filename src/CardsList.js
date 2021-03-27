import React from "react";
import Cards from "./Cards";

const characters = ({ filteredCharacters, characters }) => {
  return characters.map((url, index) => {
    if (characters[index].name === undefined) {
      return null;
    }
    return (
      <Cards
        key={index}
        characters={characters[index].name}
        height={characters[index].height}
        mass={characters[index].mass}
        hair_color={characters[index].hair_color}
        skin_color={characters[index].skin_color}
        eye_color={characters[index].eye_color}
        birth_year={characters[index].birth_year}
        gender={characters[index].gender}
        homeworld={characters[index].homeworld}
        films={characters[index].films}
      />
    );
  });
};

export default characters;
