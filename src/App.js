import React, { Component } from 'react';
import Counter from './components/Counter';
import './App.css';

class App extends Component {
  state = {
    nama: 'eko'
  };
  render() {
    return (
      <div>
        <Counter name="Lari" />
        <Counter name="Makan" />
        <Counter name="Minum" />
      </div>
    );
  }
}

export default App;
