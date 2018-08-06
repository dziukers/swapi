import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox';
import LoadCharacters from './LoadCharacters';

import logo from './logo.png';
import laser from './Images/laser.png';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      searchfield: ''
    }
    this.onInput = this.onInput.bind(this);
  }
    
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
        <img src={logo} className="App-logo" alt="Silver Star Wars logo" />
        <h1 className='App-title'>JnstaSearch</h1>
      <SearchBox onInput={this.onInput} />
      </header> 
      <LoadCharacters 
      filteredCharacters={filteredCharacters} 
      laser={laser} 
      characters={characters} />
      </div> 
      )
  }
}

export default App; 

