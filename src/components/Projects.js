import React, { Component } from 'react'
import './Projects.css'

class Projects extends Component {
	componentDidMount() {
		let textBox = document.querySelector('.textBox')
		let text = "Hello. My name is Adam DeLessio"
		let newMessage = text.split('')
		newMessage.forEach(i => {
			let letter = document.createTextNode(i)
			textBox.appendChild(letter)
		})
	}
	render() {
		return(
			<div className='projects-container'>
				<div className='green-box'></div>
				<div className='textBox' ref='text'></div>
			</div>
		)
		
	}
}

export default Projects