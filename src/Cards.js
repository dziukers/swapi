import React, { Component } from "react";
import Popup from "reactjs-popup";
import LoadPlanet from "./LoadPlanet";
import LoadFilms from "./LoadFilms";
import "./App.css";

class cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Popup
        trigger={
          <div className="cardsStyle">
            <h1>{this.props.characters}</h1>
          </div>
        }
        modal
        closeOnDocumentClick
        contentStyle={{
          padding: "0px",
          border: "1px solid grey",
          width: "auto",
          minWidth: "50%"
        }}
      >
        {close => (
          <div>
            <a className="Close-Popup" onClick={close}>
              &times;
            </a>
            <div className="Popup-header">
              <h1>{this.props.characters}</h1>
            </div>
            <div className="Popup-container">
              <div className="Popup-planet">
                <LoadPlanet planet={this.props.homeworld} />
              </div>

              <div className="Popup-content">
                <ul>
                  <li>
                    Mass:{" "}
                    {this.props.mass === "unknown"
                      ? `${this.props.mass}`
                      : `${this.props.mass} kg`}
                  </li>
                  <br />
                  <li>
                    Height:{" "}
                    {this.props.height === "unknown"
                      ? `${this.props.height}`
                      : `${this.props.height} cm`}
                  </li>
                  <br />
                  <li>{`Hair color: ${this.props.hair_color}`}</li>
                  <br />
                  <li>{`Skin color: ${this.props.skin_color}`}</li>
                  <br />
                  <li>{`Eye color: ${this.props.eye_color}`}</li>
                  <br />
                  <li>{`Birth year: ${this.props.birth_year}`}</li>
                  <br />
                  <li>{`Gender: ${this.props.gender}`}</li>
                </ul>
              </div>
              <div className="Popup-films">
                <h6 style={{margin:'10px 0 0 0', paddingBottom:'6px', textAlign:'center'}}>Appeared in:</h6>
                <LoadFilms films={this.props.films} />
              </div>
              </div>
          </div>
        )}
      </Popup>
    );
  }
}
export default cards;
