import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import CardsList from './CardsList';
import SearchBox from './SearchBox';
import laser from './Images/laser.png';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      searchfield: ''
    }}
    
    componentDidMount() {
        this.getData();
       }
    getData = async () => {

        let characters = [];
        for(var i= 1; i <= 9;i++){
    const resp = await fetch(`https://swapi.co/api/people/?page=${i}`);
    const page = await resp.json();
    const result = await page.results;
    
    await result.map(character =>{
         characters.push(character);
    this.setState({characters: characters})
          }
        );
      }
  }    
    onInput = (e) => {
        this.setState({searchfield: e.target.value})
        } 
     
  render() {
    const {characters, searchfield} = this.state;
    const filteredCharacters = characters.filter(person => 
    {return person.name.toLowerCase().includes(searchfield.toLowerCase());})

      return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Star Wars" />
        <h1 className='App-title'>JnstaSearch</h1>
      <SearchBox onInput={this.onInput.bind(this)} />
      </header> 
      <LoadCharacters 
      filteredCharacters={filteredCharacters} 
      laser={laser} 
      characters={characters} />
      </div> 
      )
  }
}

  const LoadCharacters = ({filteredCharacters, laser, characters}) => {
    if(characters.length < 50) {
      return(
    <div className='lightsaberContainer'><img src={laser} className='lightsaberHilt' alt='Lightsaber hilt'/>
    <div className='lightsaberDiv'></div></div>
    )}
    else {
      return (
      <div>
        <CardsList characters = {filteredCharacters} />
      </div>)
    }
  }

export default App; 

