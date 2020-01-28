import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import './components/About'
import './components/Contact'
// import './components/Home'
import './components/Projects'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <div className='app-container'>
        <nav className='nav'>
          <div className='block1'></div>
          <div className='block2'></div>
          <div className='block3'></div>
        </nav>

      </div>
    )
  }
}

export default App