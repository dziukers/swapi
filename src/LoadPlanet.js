import React, { Component } from 'react';
import './App.css';

class planet extends Component {
    constructor(props){
        super(props);
        this.state = {
            homeworld: ''
        }
    }
    
    componentWillMount() {
    this.getData();
}
    
   getData = async (props) => {
        
 const resp = await fetch(this.props.planet);
 const homeworld = await resp.json();
let planetName = homeworld.name;
 await this.setState({
     homeworld: planetName
 });
    }
   render(){
       const {homeworld} = this.state;
       if(homeworld ===''){
           return <h1>Loading</h1>
       }
       else{

    try{
        return (
            <div>
                <h2>{homeworld}</h2>
                <img src={require(`./Images/${homeworld}.png`)} width='60%' alt='homeworld'/>
            </div>
            )
        }
     catch(err) {
         return(
             <div style={{position:'relative'}}>
        <h2>{homeworld}</h2>
        <img src={require(`./Images/Alderaan.png`)} width='60%' style={{filter: 'grayscale()'}} alt='homeworld'/>
        <h1 className='Popup-questionMark'>?</h1> 
            </div>
        )
        }   
    }
}
        
}
    

export default planet;