import React, { Component } from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import Home from './HomeIcon'

class Contact extends Component {
	render() {
		return(
			<div className='contact-container'>
				<header className='contact-header'>
					<Link to='/' className='home-icon'> <Home /> </Link>
					<div className='header-name'>Adam DeLessio</div>
				</header>
				<div className='contact-grid'>
					<div className='grid-item'>
						<div className='method'>cell</div>
						<hr/>
						<div className='content'>(908) 635-7204</div>
					</div>
					<div className='grid-item'>
						<div className='method'>email</div>
						<hr/>
						<div className='content'>adamdelessio@gmail.com</div>
					</div>
					<a href='https://www.linkedin.com/in/adam-delessio/' className='grid-item linkedin' target='_blank'>
						<div className='method'>linkedIn</div>
						<hr/>
						<div className='content'>adam-delessio</div>
					</a>
				</div>
			</div>
		)
	}
}

export default Contact