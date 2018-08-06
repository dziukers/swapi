import React from 'react';
import CardsList from './CardsList';

const LoadCharacters = ({filteredCharacters, laser, characters}) => {
    if(characters.length <50) {
      return(
    <div>
        
        <div className='lightsaberContainer'><span className='loadingWord'>Loading</span><img src={laser} className='lightsaberHilt' alt='Lightsaber hilt'/>
        <div className='lightsaberDiv'></div></div>
    </div>  
    )}
    else {
      return (
      <div>
        <CardsList characters = {filteredCharacters} />
      </div>)
    }
  }

  export default LoadCharacters;