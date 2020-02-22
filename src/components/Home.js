import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
				<div className='name-grid'>
					<h1 className='first name'>adam</h1>
					<h1 className='last name'>delessio</h1>
				</div>
				<div className='grid'>
					<Link to='/about/' className='nav a' onMouseEnter={handleBlur} onMouseLeave={unblur}>about</Link>
					<Link to='/contact/' className='nav c' onMouseEnter={handleBlur} onMouseLeave={unblur}>contact</Link>
					<Link to='/projects/' className='nav p' onMouseEnter={handleBlur} onMouseLeave={unblur}>projects</Link>

					<div className='white-line'></div>
					<div className='black-line'></div>
				</div>
				<footer className='footer'></footer>
			</div>
		)
	}
}

export default Home