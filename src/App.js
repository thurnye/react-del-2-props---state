import React, { Component } from 'react'
import './App.css';
import Navbar from './components/navbar/navbar';
import Skills from './components/skills/skills';
import Project from './components/projects/projects'




export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navItems : ['Skills', 'Projects']
    }
  }




  render() {
    return (
      <div className="App">
        <Navbar navitems = {this.state.navItems}/>
        <Skills />
        <Project />
      </div>
    );
  }

}

