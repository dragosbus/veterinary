import React, { Component } from 'react';
import {Header} from './components/Header';
import {AddPet} from './components/AddPet';
import {Appointments} from './components/Appointments';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [{name:'Rufus', owner:'Mikel', time:'2018-06-29', notes:'Some note'}],
      showForm: false
    }
    this.makeApt = this.makeApt.bind(this);
    this.togglerForm = this.togglerForm.bind(this);
  }

  makeApt(name, owner, time, notes) {
    let newApt = {
      name, owner, time, notes
    };
    this.setState(prevState=>{
      return {
        appointments: prevState.appointments.concat(newApt)
      };
    });
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
        <Appointments appointments={this.state.appointments}/>
      </div>
    );
  }
}

export default App;
