import React, { Component } from 'react'
import './App.css';
import Navbar from './components/navbar/navbar';
import Skills from './components/skills/skills';
import Project from './components/projects/projects'




export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navItems : ['Skills', 'Projects'],
      name: 'My Account',
      IsLogged: false
    }
  }


  handleLogout = () => {
    this.setState({
      name: ' My Account',
      IsLogged: false
    })
  }
  handleLogIn = () => {
    this.setState((state, props) => ({
      name: 'Daniel',
      IsLogged: true
    }));
  }

  render() {
    return (
      <div className="App">
        <Navbar 
        navitems = {this.state.navItems} 
        logOut={this.handleLogout} 
        logIn={this.handleLogIn} 
        name={this.state.name}
        IsLogged={this.state.IsLogged}
        />
        <Skills />
        <Project />
      </div>
    );
  }

}

