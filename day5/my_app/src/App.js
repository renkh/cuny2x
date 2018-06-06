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

  getIndex(value, arr) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === value) {
        return i;
      }
    }
    return
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

  handleDelete(i, event){
    console.log("this is the name in the handleDelete: ", i );
    let aListOfNames = this.state.listOfNames;
    var index = i;
    let updatedListOfNames = aListOfNames.filter((_, i) => i !== index);
    console.log("this is the updatedListOfNames in the handleDelete: ", updatedListOfNames );
    this.setState({
      listOfNames: updatedListOfNames
    })
    let text = this.refs.text;
    text.value = "";
    console.log("this new list of names in handleDelete: ", this.state.listOfNames)
  }

  render() {
    const listOfNames = this.state.listOfNames;
    const name = listOfNames.map((name, i) => (<li key={i}>{name}</li>));
    return (
      <div className="App">
        <p className="App-intro">
          React Simple To Do List
        </p>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              To-Do:
              <input onChange={this.handleChange.bind(this)} type="text" name="name" ref="text"/>
            </label>
            <input type="submit" value="Add" />
          </form>
          <ul>
            {listOfNames.map((name, i) => (
              <li key={i}>{name}<button onClick={this.handleDelete.bind(this, i)}>Delete</button></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
