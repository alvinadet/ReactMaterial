import React, { Component } from 'react';

class HeaderClass extends Component {
  state = {
    angka: 1
  };

  handleClick = () => {
    alert('Yah Di Klik?');
  };

  render() {
    return (
      <div>
        <h1>Ini Component Class angkanya {this.state.angka}</h1>
        <button onClick={() => this.handleClick()}>Jangan Di Klik!</button>
      </div>
    );
  }
}

export default HeaderClass;
