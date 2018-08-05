import React, { Component } from 'react';
import './LoadPlanet.css';
import Popup from 'reactjs-popup';
import PlanetInfo from './PlanetInfo';
import SwitchPlanetPicture from './SwitchPlanetPicture';

import gasgiant from './Images/gasgiant.jpg';
import desert from './Images/desert.jpg';
import urban from './Images/urban.jpg';
import grasslands from './Images/grasslands.jpg';
import mountainranges from './Images/mountainranges.jpg';
import grassyhills from './Images/grassyhills.jpg';
import ocean from './Images/ocean.jpg';
import islands from './Images/islands.jpg';



class planet extends Component {
    constructor(props){
        super(props);
        this.state = {
            homeworld: '',
            terrain: '',
            climate: '',
            diameter: '',       
            gravity: ''
            
        }
    }
    
    componentWillMount() {
    this.getData();
}
    
   getData = async (props) => {
        
 const resp = await fetch(this.props.planet);
 const homeworld = await resp.json();
let planetName = homeworld;
 await this.setState({
     homeworld: planetName.name,
     climate: planetName.climate,
     gravity: planetName.gravity,
     terrain: planetName.terrain,
     diameter: planetName.diameter
    });
}

    pictureName = () => {
        const {terrain} = this.state;
            if (terrain.includes('gas giant')) { return gasgiant};
            if (terrain.includes('desert')) { return desert};
            if (terrain.includes('urban') || terrain.includes('cityscape')) { return urban};
            if (terrain.includes('grasslands')) { return grasslands};
            if (terrain.includes('mountain ranges')) { return mountainranges};
            if (terrain.includes('forests')) { return grassyhills};
            if (terrain.includes('ocean')) { return ocean};
            if (terrain.includes('islands')) { return islands};
    }   
    
    planetBackground = (popupBackground) => {
        let bgStyle;
        if (popupBackground === undefined) {
            bgStyle = {
                backgroundColor: 'black',
                color: 'white',
                border:'2px solid transparent',
                borderImage: 'linear-gradient(to left,#aaa, #222, #aaa) 30 stretch',
            }
        }else {
            bgStyle = {
            background:'transparent',
            backgroundImage:`linear-gradient(to bottom, rgba(255,255,255,0.3) 0%,rgba(255,255,255,0.3) 100%)
            ,url(${popupBackground})`,
            backgroundSize:'cover',
            border:'2px solid transparent',
            borderImage: 'linear-gradient(to left,#aaa, #222, #aaa) 30 stretch',
        }
        }
        return bgStyle;
    }

   render(){
       const {homeworld, climate, gravity, terrain, diameter} = this.state;
       const popupBackground = this.pictureName();
       const backgroundStyle = this.planetBackground(popupBackground);
       if(homeworld ===''){
           return <h1>Loading</h1>
       }
       else{
        return (
            <Popup
            trigger= {
            <div style={{position:'relative', cursor:'pointer'}}>
            <h6 style={{margin:'20px 0 0 0', paddingBottom:'6px'}}>Homeworld:</h6>
                <h2 style={{marginTop:'0', paddingTop:'0', fontStyle:'italic'}}>{homeworld}</h2>
               <SwitchPlanetPicture homeworld={homeworld}/> 
            </div>
            }
            className='PopupPlanet-style'
            contentStyle={backgroundStyle}
            arrowStyle={{background:'linear-gradient(to bottom,#aaa, #222)'}}
            position='top center'
            on='click'>
            <div >
            <PlanetInfo 
            terrain={terrain} 
            climate={climate} 
            gravity={gravity} 
            diameter={diameter} 
            />
            </div>
            </Popup>
            )
        }
    }        
}

export default planet;