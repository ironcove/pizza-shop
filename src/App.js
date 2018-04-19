import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" title="Iron Cove Solutions"/>
          <h1 className="App-title">Iron Cove Solutions</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-text">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2 className="h2">Single Sign On <a href="../technology/okta">SSO</a></h2>
      </div>
    );
  }
}



export default App;
