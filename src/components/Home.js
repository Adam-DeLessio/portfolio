import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

class Home extends Component {
	render() {
	    function handleBlur(event) {
	      let blocks = document.querySelectorAll('.block')
	      blocks.forEach(i => {
	        i.style.animation = 'blur 300ms forwards'
	      })
	      event.target.style.animation = null
	      event.target.style.cursor = 'grab'
	    }  
	    function unblur(event) {
	      let blocks = document.querySelectorAll('.block')
	      blocks.forEach(i => {
	        i.style.animation = 'unblur 300ms forwards'
	      })
	      event.target.style.animation = null
	    }
		return(
			<div className='home-container'>
		        <nav className='nav'>
		          <Link to='/About/' className='block1 block' onMouseEnter={handleBlur} onMouseLeave={unblur}>About</Link>
		          <div className='block2 block' onMouseEnter={handleBlur} onMouseLeave={unblur}>Projects</div>
		          <div className='block3 block' onMouseEnter={handleBlur} onMouseLeave={unblur}>Contact</div>
		        </nav>

			</div>
		)
	}
}

export default Home