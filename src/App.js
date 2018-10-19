import React, { Component } from 'react';
import logo from './logo.svg';
import HeaderClass from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderClass nama="alvin" kelas="10" />
        <HeaderClass nama="adetya" kelas="11" />
        <HeaderClass nama="sodo" kelas="12" />
        <HeaderClass nama="jono" kelas="13" />
      </div>
    );
  }
}

export default App;
