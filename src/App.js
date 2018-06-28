import React, { Component } from 'react';
import {Header} from './components/Header';
import {AddPet} from './components/AddPet';
import {Appointments} from './components/Appointments';
import {Search} from './components/Search';
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
    this.cancelApt = this.cancelApt.bind(this);
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

  cancelApt(index) {
    let apts = this.state.appointments;
    apts.splice(index,1);
    this.setState({
      appointments: apts
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <AddPet makeApt={this.makeApt} showForm={this.state.showForm}  togglerForm={this.togglerForm}/>
        <Search/>
        <Appointments appointments={this.state.appointments} cancelApt={this.cancelApt}/>
      </div>
    );
  }
}

export default App;
