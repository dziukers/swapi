import React from 'react';

const planet = ({climate, gravity, terrain, diameter}) => {

    return (
                <div >
                <p>Terrain: {terrain}</p>
                <hr/>        
                <p>Climate: {climate}</p>
                <hr/>
                <p>Gravity: {gravity}</p>
                <hr/>
                <p>Diameter: {diameter}</p>
                </div>   

            )
}

export default planet;