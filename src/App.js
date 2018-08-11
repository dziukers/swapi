import React, { Component } from "react";
import "./App.css";
import SearchBox from "./SearchBox";
import LoadCharacters from "./LoadCharacters";

import logo from "./logo.png";
import laser from "./Images/laser.png";


class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchfield: "",
      sortDir:true,
      filter: 'none'
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    let characters = [];
    for (var i = 1; i <= 9; i++) {
      const resp = await fetch(`https://swapi.co/api/people/?page=${i}`);
      const page = await resp.json();
      const result = await page.results;

      await result.map(character => {
        characters.push(character);
        this.setState({ characters: characters
        });
      });
    }
  };
  onInput = e => {
    this.setState({ searchfield: e.target.value });
  };

onClick =() => {
  console.log(this);
  function compare(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }
  let sortedCharacters = this.state.characters.sort(compare);
  this.state.sortDir ? this.setState({characters: sortedCharacters, sortDir: false})
  : 
  this.setState({characters: sortedCharacters.reverse(),sortDir: true})
  
}
filter = (e) => {
  let choosedFilter = e.target.value;
  this.setState({
    filter: choosedFilter
  })
}
  render() {
    const { characters, searchfield, filter} = this.state;
    const filteredCharacters = characters.filter(person => {
      if (filter !== 'none'){
        return filter === person.homeworld || person.films.includes(filter) &&       
       person.name.toLowerCase().includes(searchfield.toLowerCase())
      }
      else{return person.name.toLowerCase().includes(searchfield.toLowerCase());}
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Silver Star Wars logo" />
          <h1 className="App-title">JnstaSearch</h1>
          <SearchBox onChange={this.filter} onInput={this.onInput} onClick={this.onClick} /> 
        </header>
        <LoadCharacters
          filteredCharacters={filteredCharacters}
          laser={laser}
          characters={characters}
        />
      </div>
    );
  }
}

export default App;
