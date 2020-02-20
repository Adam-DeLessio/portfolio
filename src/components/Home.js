import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
	render() {
	    function handleBlur(event) {
	      let navs = document.querySelectorAll('.nav')
	      navs.forEach(i => {
	        i.style.animation = 'blur 300ms forwards'
	        i.style.cursor = 'grab'
	      })
	      event.target.style.animation = null
	    }  
	    function unblur(event) {
	      let navs = document.querySelectorAll('.nav')
	      navs.forEach(i => {
	        i.style.animation = 'unblur 300ms forwards'
	      })
	      event.target.style.animation = null
	    }

		return(
			<div className='home-container'>
				<header className='header'></header>
				<div className='grid'>
					<div className='nav a' onMouseEnter={handleBlur} onMouseLeave={unblur}>about</div>
					<div className='nav c' onMouseEnter={handleBlur} onMouseLeave={unblur}>contact</div>
					<div className='nav p' onMouseEnter={handleBlur} onMouseLeave={unblur}>projects</div>

					<div className='white-line'></div>
					<div className='black-line'></div>
				</div>
				<footer className='footer'></footer>
			</div>
		)
	}
}

export default Home