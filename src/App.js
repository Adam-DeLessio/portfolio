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

    // function getCoors(event) {
    //   var x = event.clientX
    //   var y = event.clientY
    //   let circle = document.querySelector('.circle')
    //   circle.style.left = x + 'px'
    //   circle.style.top = y + 'px'
    // }
    function handleBlur(event) {
      let blocks = document.querySelectorAll('.block')
      blocks.forEach(i => {
        i.style.filter = 'blur(4px)'
      })
      event.target.style.filter = 'blur(0)'
    }  
    function unblur(event) {
      let blocks = document.querySelectorAll('.block')
      blocks.forEach(i => {
        i.style.filter = 'blur(0)'
      })
      event.target.style.filter = 'blur(0)'
    }

    return(
      <div className='app-container'>
        <nav className='nav'>
          <div className='block1 block' onMouseEnter={handleBlur} onMouseLeave={unblur}>About</div>
          <div className='block2 block' onMouseEnter={handleBlur} onMouseLeave={unblur}>Projects</div>
          <div className='block3 block' onMouseEnter={handleBlur} onMouseLeave={unblur}>Contact</div>
        </nav>

      </div>
    )
  }
}

export default App




        // <div className='grid-container'>
        //   <div className='grid-item'></div>
        //   <div className='grid-item'></div>
        //   <div className='grid-item'></div>
        //   <div className='grid-item'></div>
        //   <div className='grid-item'></div>
        //   <div className='grid-item'></div>
        //   <div className='grid-item'></div>
        //   <div className='grid-item'></div>
        //   <div className='grid-item'></div>
        // </div>


