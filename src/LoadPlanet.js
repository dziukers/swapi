import React, { Component } from 'react';
import './App.css';
import Popup from 'reactjs-popup';

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
   render(){
       const {homeworld, climate, gravity, terrain, diameter} = this.state;
       if(homeworld ===''){
           return <h1>Loading</h1>
       }
       else{

    try{
        return (
            <Popup
            trigger= {
            <div>
                <h2>{homeworld}</h2>
                <img src={require(`./Images/${homeworld}.png`)} width='60%' alt='homeworld'/>
            </div>
            }
            contentStyle = {{background:'black'}}
            position='top center'
            on='hover'
            >
            <div>
                <p>Climate: {climate}</p>
                <hr/>
                <p>Gravity: {gravity}</p>
                <hr/>
                <p>Terrain: {terrain}</p>
                <hr/>
                <p>Diameter: {diameter}</p>
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