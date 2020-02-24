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
					<h2 className='tag'>Software Developer</h2>
					<div className='extras'>
						<a href='https://github.com/Adam-DeLessio/Resume/blob/master/Resume.pdf' className='extra resume' target='_blank'>Resume</a>
						<a href='https://github.com/Adam-DeLessio' className='extra git' target='_blank'>GitHub</a>
					</div>
				</aside>
				<main className='about-main'>
					<section className='about-me'>
						<h2 className='hello'>Hello, I'm Adam!</h2>
						<p className='about'>I am a software developer in the Washington D.C. metro area and a recent graduate of the Software
						Engineering Immersive at General Assembly.
						</p>
						<p className='about'>
						Until recently, I spent most of my adult life as a collegiate musician or professional musician in the Marine Corps. After four years in the service
						I decided that I no longer wanted to pursue music or the military.
						</p>
						<p className='about'>I chose to study software development, and I am incredibly happy with my decision.
						I love being in an industry that is constantly moving and changing, and being around so many people who are passionate about solving all kinds of problems.
						</p>
					</section>	
					<hr className='line' />
					<ul className='skills-list'>
						<li>HTML/CSS</li>
						<li>Javascript</li>
						<li>React</li>
						<li>Node.js</li>
						<li>Express</li>
						<li>Python</li>
						<li>Django</li>
					</ul>
					<hr className='line' />
				</main>
			</div>
		)
	}
}

export default About