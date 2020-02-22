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

        <Route
          path='/'
          exact
          render={props => (
            <Home
              {...props}
            />
          )}
        />
        <Route
          path='/About'
          render={props => (
            <About
              {...props}
            />
          )}
        />
        <Route
          path='/Projects'
          render={props => (
            <Projects
              {...props}
            />
          )}
        />
        <Route
          path='/Contact'
          render={props => (
            <Contact
              {...props}
            />
          )}
        />

      </div>
    )
  }
}

export default App