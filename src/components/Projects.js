import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Home from './HomeIcon'
import './Projects.css'

class Projects extends Component {
	render() {
		return(
			<div className='projects-container'>
				<header className='projects-header'>
					<Link to='/' className='home-icon'> <Home /> </Link>
					<div className='header-name'>Adam DeLessio</div>
				</header>

			</div>
		)
	}
}

export default Projects