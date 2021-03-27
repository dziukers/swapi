import React, { Component } from "react";
import "./App.css";
import SearchBox from "./SearchBox";
import LoadCharacters from "./LoadCharacters";
import logo from "./logo.png";
import laser from "./Images/laser.png";
import deathstar from "./Images/death-star2.png";
import Scroll from "./Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchfield: "",
      sortDir: true,
      filter: "none",
      minLoadTimePassed: false,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ minLoadTimePassed: true }), 3000);
    this.getData("https://swapi.dev/api/people/");
  }

  getData = async (link) => {
    const resp = await fetch(link);
    const page = await resp.json();
    const result = await page.results;
    const nextPage = await page.next;
    this.setState((prevState) => ({
      characters: [...prevState.characters, ...result],
    }));
    if (nextPage) this.getData(nextPage.replace("http", "https"));
  };

  search = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  sorting = () => {
    function compare(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }
    let sortedCharacters = this.state.characters.sort(compare);
    this.state.sortDir
      ? this.setState({ characters: sortedCharacters, sortDir: false })
      : this.setState({
          characters: sortedCharacters.reverse(),
          sortDir: true,
        });
  };

  filter = (e) => {
    let chosenFilter = e.target.value;
    this.setState({
      filter: chosenFilter,
    });
  };

  render() {
    const { characters, searchfield, filter, minLoadTimePassed } = this.state;

    const filteredCharacters = characters.filter((person) => {
      if (filter !== "none") {
        return (
          (filter === person.homeworld || person.films.includes(filter)) &&
          person.name.toLowerCase().includes(searchfield.toLowerCase())
        );
      } else {
        return person.name.toLowerCase().includes(searchfield.toLowerCase());
      }
    });

    return (
      <div className="App">
        <header className="App-header">
          <span className="App-description">{`All Star Wars characters in one place\nData comes from STAR WARS API`}</span>
          <div className="App-logoContainer">
            <img src={logo} className="App-logo" alt="Black Star Wars logo" />
            <h1 className="App-title">JnstaSearch</h1>
            <SearchBox
              onChange={this.filter}
              onInput={this.search}
              onClick={this.sorting}
            />
          </div>
          <div className="App-deathstar">
            <img src={deathstar} alt="moving death star" />
          </div>
        </header>
        <Scroll>
          <LoadCharacters
            filteredCharacters={filteredCharacters}
            laser={laser}
            characters={characters}
            minLoadTimePassed={minLoadTimePassed}
          />
        </Scroll>
      </div>
    );
  }
}

export default App;
