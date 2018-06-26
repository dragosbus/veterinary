import React, { Component } from 'react';
import {Header} from './components/Header';
import {AddPet} from './components/AddPet';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: []
    }
    this.makeApt = this.makeApt.bind(this);
  }

  makeApt(name, owner, time, notes) {
    console.log(name, owner, time, notes);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <AddPet makeApt={this.makeApt}/>
      </div>
    );
  }
}

export default App;
