import React, { Component } from "react";
import Covers from "./Covers";
import "./App.css";
class films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episode1: false,
      episode2: false,
      episode3: false,
      episode4: false,
      episode5: false,
      episode6: false
    };
  }
  componentWillMount() {
    this.props.films.forEach(film => {
      switch (film) {
        case "http://swapi.dev/api/films/1/":
          this.setState({
            episode4: true
          }); break;
        case "http://swapi.dev/api/films/2/":
          this.setState({
            episode5: true
          }); break;
        case "http://swapi.dev/api/films/3/":
          this.setState({
            episode6: true
          }); break;
        case "http://swapi.dev/api/films/4/":
          this.setState({
            episode1: true
          }); break;
        case "http://swapi.dev/api/films/5/":
          this.setState({
            episode2: true
          }); break;
        case "http://swapi.dev/api/films/6/":
          this.setState({
            episode3: true
          }); break;
        default: return;
      }
    });
  }

  render() {
    let boolean = Object.values(this.state);
    let cover = Object.keys(this.state);

    return (
      <Covers boolean={boolean} cover={cover} />
    )
  }
}

export default films;
