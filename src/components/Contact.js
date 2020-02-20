import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
	render() {
		return(
			<div className='contact-container'>
				<div className='contact-grid'>
					<div className='contact-nav a'>about</div>
					<div className='contact-nav c'>contact</div>
					<div className='contact-nav p'>projects</div>

					<div className='black-line'></div>
				</div>
				<footer className='contact-footer'></footer>
			</div>
		)
	}
}

export default Contact