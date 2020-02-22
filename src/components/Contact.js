import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
	render() {
		return(
			<div className='contact-container'>
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
					<div className='grid-item'>
						<div className='method'>linkedIn</div>
						<hr/>
						<div className='content'>adam-delessio</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact