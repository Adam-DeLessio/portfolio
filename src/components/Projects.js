import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Home from './HomeIcon'
import './Projects.css'

class Projects extends Component {
	render() {
		function enter(event) {
			// event.target.style.animationName = 'enter'
		}
		function leave(event) {
			// event.target.style.animationName = 'leave'
		}
		return(
			<div className='projects-container'>
				<header className='projects-header'>
					<Link to='/' className='home-icon'> <Home /> </Link>
					<div className='header-name'>Adam DeLessio</div>
				</header>
				<div className='projects-grid'>
					<a className='project tower' target='_blank' href='https://adam-delessio.github.io/Tower_of_Hanoi/' onMouseEnter={enter} onMouseLeave={leave}>Tower of Hanoi</a>
					<a className='project tic' target='_blank' href='https://adam-delessio.github.io/Tic_Tac_Toe/' onMouseEnter={enter} onMouseLeave={leave}>Tic Tac Toe</a>
					<a className='project parks' target='_blank' href='https://github.com/Adam-DeLessio/national-parks' onMouseEnter={enter} onMouseLeave={leave}>National Parks</a>
					<a className='project address' target='_blank' href='https://github.com/Adam-DeLessio/python-cli-project' onMouseEnter={enter} onMouseLeave={leave}>Address Book</a>
				</div>
			</div>
		)
	}
}

export default Projects