import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
require("dotenv").config();
const AUTH_URL = "https://accounts.spotify.com/authorize?";
const REDIRECT_URL = `${AUTH_URL}client_id=${
  process.env.REACT_APP_SPOTIFY_CLIENT_ID
}&redirect_uri=${
  process.env.REACT_APP_CALLBACK_URL
}&scope=user-read-private%20user-read-email&response_type=token&state=123`;

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <a href={REDIRECT_URL}>Log in with spotify</a>
      </div>
    );
  }
}

export default App;
