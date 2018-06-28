import React, { Component } from 'react';
import Board from './board';

class App extends Component{
  render(){
    return(
      <div>
        <h1>Binary Switches</h1>
        <Board/>
        <h4>Hello World</h4>
      </div>
    );
  }

}

export default App;