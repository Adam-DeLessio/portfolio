import React, { Component } from 'react'
import './About.css'


class About extends Component {
	render() {
		function handleEnter(event) {
			// event.target.style.animation = 'expand 400ms forwards'
		}
		function handleLeave(event) {
		// 	event.target.style.animation = 'condense 400ms forwards'
		}
		return(
			<div className='about-container'>
				<main className='grid-container'>
					<section className='grid-item grid1'>
						<div className='nav-item nav1' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
							<div className='bullet-container'>
								<div className='bullet'>
									<div className='inner-bullet'></div>
								</div>
							</div>
							<div className='name group1'>About</div>
						</div>
						<div className='nav-item nav2'>
							<div className='bullet-container'>
								<div className='bullet' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
									<div className='inner-bullet'></div>
								</div>
							</div>
							<div className='name'>Projects</div>
						</div>
						<div className='nav-item nav3'>
							<div className='bullet-container'>
								<div className='bullet' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
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