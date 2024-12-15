import './App.css'
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';

export class App extends Component {
  render() {
    return (
      <div>
       <Navbar/>
       <News pageSize={6}/>
       
      </div>
    )
  }
}

export default App


