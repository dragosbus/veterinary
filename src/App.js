import React, { Component } from 'react';
import {Header} from './components/Header';
import {AddPet} from './components/AddPet';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      showForm: false
    }
    this.makeApt = this.makeApt.bind(this);
    this.togglerForm = this.togglerForm.bind(this);
  }

  makeApt(name, owner, time, notes) {
    console.log(name, owner, time, notes);
  }

  togglerForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <AddPet makeApt={this.makeApt} showForm={this.state.showForm}  togglerForm={this.togglerForm}/>
      </div>
    );
  }
}

export default App;
