import React, { Component } from 'react';
import { render } from 'react-dom';

//function Hello (){
  //return <h2>Holaaaa</h2>
//return React.createElement("h2", null, "Holaaa")
//}
const Hello = props => <h2>Holaaa arrow {props.name}</h2>

function Max(props){
  return <h2>Max of 2 and 5 is </h2>
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Hello />
      <Max/>
      </div>

    );
  }
}

render(<App />, document.getElementById('root'));
