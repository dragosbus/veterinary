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
      appointments: [],
      appointmentsCopy: [],
      showForm: false,
      orderBy: 'sort'
    }
    this.makeApt = this.makeApt.bind(this);
    this.togglerForm = this.togglerForm.bind(this);
    this.cancelApt = this.cancelApt.bind(this);
    this.sortByHandler = this.sortByHandler.bind(this);
    this.search = this.search.bind(this);
  }

  makeApt(name, owner, time, notes) {
    let newApt = {
      name, owner, time, notes
    };
    this.setState(prevState=>{
      return {
        appointments: prevState.appointments.concat(newApt),
        appointmentsCopy: prevState.appointments.concat(newApt)
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
      appointments: apts,
      appointmentsCopy: apts
    });
  }

  sortByHandler(e) {
    let orderBy = e.target.value;
    this.setState(prevState=>{
      return {
        orderBy: orderBy,
        appointments: prevState.appointments.sort((a,b)=> a[orderBy] > b[orderBy] ? 1 : -1)
      };
    });
  }

  search(e) {
    let query = e.target.value;
    let filteredApt = this.state.appointmentsCopy;
    if(query) {
      this.setState({
        appointments: filteredApt.filter(apt=>apt.name.indexOf(query) >= 0)
      });
    } else {
      this.setState(prevState=>{
        return {
          appointments: prevState.appointmentsCopy
        }
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <AddPet 
          makeApt={this.makeApt} 
          showForm={this.state.showForm}  
          togglerForm={this.togglerForm}
        />
        <Search 
          orderBy={this.state.orderBy} 
          sortByHandler={this.sortByHandler}
          search={this.search}
        />
        <Appointments 
          appointments={this.state.appointments} cancelApt={this.cancelApt}
        />
      </div>
    );
  }
}

export default App;
