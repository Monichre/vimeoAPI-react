import React, { Component } from 'react';
import './App.css';
var videos = require('./api.js').videos;


console.log("What the fuck is going on");
console.log(videos);

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
