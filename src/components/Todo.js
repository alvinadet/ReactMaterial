import React, { Component } from 'react';

class Todo extends Component {
  state = {
    database: ['Makan', 'lari', 'olahraga', 'renang'],
    input: ''
  };

  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <input type="text" /> <br />
        <button>Simpan</button>
        <ul>
          {this.state.database.map(datum => {
            return <li>{datum}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;
