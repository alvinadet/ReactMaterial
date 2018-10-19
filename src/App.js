import React, { Component } from 'react';
import logo from './logo.svg';
import HeaderClass from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hallo</h1>
        <h1>Hallo</h1>
        <Header />
        <HeaderClass />
      </div>
    );
  }
}

const Header = () => {
  return <h1>Ini Header Functional</h1>;
};

export default App;
