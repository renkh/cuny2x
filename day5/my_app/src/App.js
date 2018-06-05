import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      listOfNames: []
    }
  }

  handleChange(event) {
    const name = event.target.value;
    this.setState ({
      name
    })
    //console.log("this is the name in the handleChange: ", this.state.name )
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    let updatedListOfNames = this.state.listOfNames;
    updatedListOfNames.push(name);
    this.setState({
      listOfNames: updatedListOfNames
    })
    let text = this.refs.text;
    text.value = "";
    console.log("this new list of names: ", this.state.listOfNames)
  }

  render() {
    const listOfNames = this.state.listOfNames;
    const name = listOfNames.map((name, i) => (<li key={i}>{name}</li>));

    return (
      <div className="App">
        <p className="App-intro">
          Welcome to my React app!
        </p>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              Name:
              <input onChange={this.handleChange.bind(this)} type="text" name="name" ref="text"/>
            </label>
            <input type="submit" value="Submit" />
          </form>
          <ul>
            { (name) ? name: null }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
