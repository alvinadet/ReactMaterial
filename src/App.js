import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hallo</h1>
        <h1>Hallo</h1>
        <Header />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return <h1>Ini Header</h1>;
  }
}

export default App;
