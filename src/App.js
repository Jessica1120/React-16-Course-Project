import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Mollie', age: 7},
      {name: 'Casper', age: 10},
      {name: 'Gruffles', age: 5}
    ]
  }
  render() {
    return (
      <div className="App">
       <h1>React App #1! </h1>
       <button>Switch Name </button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}  />
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}  > I'm grumpy </Person>
       <Person name="Gruffles" age = "5" />
      </div>
    );
    //does the same thing as above. above code is compiled into below code.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'child rendered'))
  }
}

export default App;
