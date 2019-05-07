import React, { Component } from 'react';
import { render } from 'react-dom';

//function Hello (){
  //return <h2>Holaaaa</h2>
//return React.createElement("h2", null, "Holaaa")
//}
const Hello = props => <h2>Holaaa arrow</h2>

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      React.createElement("div",null, React.createElement("h1",null, <Hello/>))

    );
  }
}

render(<App />, document.getElementById('root'));
