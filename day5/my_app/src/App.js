import React, { Component } from 'react';
import './App.css';
import { Navbar, PageHeader, NavItem, Nav, Grid, Row, Col, Button } from "react-bootstrap";

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

  handleDelete(i, event){
    let aListOfNames = this.state.listOfNames;
    var index = i;
    let updatedListOfNames = aListOfNames.filter((_, i) => i !== index);
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
        <PageHeader>
          React Simple To Do List
        </PageHeader>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              <input onChange={this.handleChange.bind(this)} type="text" name="name" ref="text"/>
            </label>
            <input type="submit" value="Add" />
          </form>
          <ul>
            {listOfNames.map((name, i) => (
              <li key={i}>{name}<Button onClick={this.handleDelete.bind(this, i)}>Delete</Button></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
