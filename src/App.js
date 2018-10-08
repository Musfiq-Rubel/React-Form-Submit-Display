import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Form from './components/Form'
import Table from './components/Table';

class App extends Component {

    state = {
      users:[]
   }
  

   handleSubmit = user => {
    this.setState({users: [...this.state.users, user]});
  
  
}
  render() {

    

    return (
      <div className="App">
      <Form  handleSubmit={this.handleSubmit}/>
      <Table  userData={this.state.users} /> 
      </div>
    );
  }
}

export default App;
