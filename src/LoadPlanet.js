import React, { Component } from 'react';
import './App.css';
import Popup from 'reactjs-popup';
import PlanetInfo from './PlanetInfo';
import gasgiant from './Images/gasgiant.jpg';
import desert from './Images/desert.jpg';
import urban from './Images/urban.jpg';

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
 });}

    pictureName = () => {
        const {terrain} = this.state;
            if (terrain.includes('gas giant')) { return gasgiant};
            if (terrain.includes('desert')) { return desert};
            if (terrain.includes('urban')) { return urban};
       
    }

   render(){
       const {homeworld, climate, gravity, terrain, diameter} = this.state;
       const popupBackground = this.pictureName();
       if(homeworld ===''){
           return <h1>Loading</h1>
       }
       else{

    try{
        return (
            <Popup
            trigger= {
            <div >
                <h2>{homeworld}</h2>
                <img src={require(`./Images/${homeworld}.png`)} width='60%' alt='homeworld'/>
            </div>
            }
            contentStyle={{
            background:`url(${popupBackground})`,
            backgroundSize:'cover',
            color:'black',
            fontWeight:'bold', 
            border:'3px solid transparent',
            borderImage: 'linear-gradient(to left,#aaa, #222, #aaa)',
            borderImageSlice: '1'}}
            arrowStyle={{background:'linear-gradient(to bottom,#aaa, #222)'}}
            position='top center'
            on='hover'>
            <div >
            <PlanetInfo 
            terrain={this.state.terrain} 
            climate={this.state.climate} 
            gravity={this.state.gravity} 
            diameter={this.state.diameter} 
            />
            </div>
            </Popup>
            )
        }
     catch(err) {
         return(
        <Popup
        trigger= {
             <div style={{position:'relative'}}>
                <h2>{homeworld}</h2>
                <img src={require(`./Images/Alderaan.png`)} width='60%' style={{filter: 'grayscale()'}} alt='homeworld'/>
                <h1 className='Popup-questionMark'>?</h1> 
            </div>
            }
            contentStyle = {{background:'black'}}
            position='top center'
            on='hover'>
                {climate}
            </Popup>
            
        )
        }   
    }
}
        
}
    

export default planet;