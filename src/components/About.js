import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Home from './HomeIcon'
import './About.css'

class About extends Component {
	render() {
		return(
			<div className='about-container'>
				<header className='about-header'>
					<Link to='/' className='home-icon'> <Home /> </Link>
				</header>
				<aside className='about-aside'>
					<div className='avatar'></div>
					<h1 className='full-name'>Adam DeLessio</h1>
					<h2 className='tag'>Full stack developer</h2>
				</aside>
				<main className='about-main'>
					<p className='about'></p>
					<div className='skills'>
						<h2 className='skills-title'>Skills</h2>
						<ul className='skills-list'>
							<li>HTML/CSS</li>
							<li>Javascript</li>
							<li>React</li>
							<li>Node.js</li>
							<li>Express</li>
							<li>Python</li>
							<li>Django</li>
						</ul>
					</div>
				</main>
			</div>
		)
	}
}

export default About