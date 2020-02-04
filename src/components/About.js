import React, { Component } from 'react'
import './About.css'


class About extends Component {
	render() {
		return(
			<div className='about-container'>
				<main className='grid-container'>
					<section className='grid-item grid1'>
						<div className='nav-item nav1'>
							<div className='bullet-container'>
								<div className='bullet'>
									<div className='inner-bullet'></div>
								</div>
							</div>
							<div className='name'></div>
						</div>
						<div className='nav-item nav2'>
							<div className='bullet-container'>
								<div className='bullet'>
									<div className='inner-bullet'></div>
								</div>
							</div>
							<div className='name'></div>
						</div>
						<div className='nav-item nav3'>
							<div className='bullet-container'>
								<div className='bullet'>
									<div className='inner-bullet'></div>
								</div>
							</div>
							<div className='name'></div>
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