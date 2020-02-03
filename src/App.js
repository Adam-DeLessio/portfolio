import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'

class App extends Component {
  render() {
    return(
      <div className='app-container'>
        <Link to='/' className='home'>Home</Link>


        <Route path='/' component={Home} exact />
        <Route path='About/' component={About} />

      </div>
    )
  }
}

export default App