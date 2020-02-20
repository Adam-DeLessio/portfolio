import React, { Component } from 'react'
import './About.css'


class About extends Component {
	render() {

		function mouseEnter(event) {
			let message = document.querySelector('.intro-paragraph').innerHTML
			let newMessage = message.split('')
			newMessage.map(l => {
				
			})
		}
		function letterEnter(l) {

		}

		return(
			<div className='about-container'>
				<header className='intro-container'>
					<section className='intro-section'>
						<img className='profile-pic' src='https://i.imgur.com/UHABbRy.jpg'/>
						<p className='intro-paragraph' onMouseEnter={mouseEnter}>Hello, I'm Adam DeLessio.</p>
					</section>
				</header>

				<main className='grid-container'>
					<section className='grid-item grid1'>
						<div className='nav-item nav1'>
							<div className='bullet-container'>
								<div className='bullet'>
									<div className='inner-bullet'></div>
								</div>
							</div>
							<div className='name group1'>About</div>
						</div>
						<div className='nav-item nav2'>
							<div className='bullet-container'>
								<div className='bullet'>
									<div className='inner-bullet'></div>
								</div>
							</div>
							<div className='name'>Projects</div>
						</div>
						<div className='nav-item nav3'>
							<div className='bullet-container'>
								<div className='bullet'>
									<div className='inner-bullet'></div>
								</div>
							</div>
							<div className='name'>Contact</div>
						</div>
					</section>
					<section className='grid-item grid2'></section>
					<section className='grid-item grid3'></section>
				</main>
			</div>
		)
	}
}

export default About