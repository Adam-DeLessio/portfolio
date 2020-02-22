import React from 'react'

const svg = ({
	style = {},
	width = "50",
	height = "50",
	viewBox = "0 0 194.468 173.855",
	fill = 'none',
	strokeWidth = '10px',
	stroke1 = 'red',
	stroke2 = '#000'
}) => (
	<svg 
		width={width}
		height={height}
		viewBox={viewBox}
		xmlns="http://www.w3.org/2000/svg"
		transform="translate(3.234 3.813)"
		fill={fill}
	>
		<line id="Line_1" data-name="Line 1" fill={fill} strokeWidth={strokeWidth} stroke={stroke2} className="cls-1" y2="120" transform="translate(48 50)"/>
	    <line id="Line_2" data-name="Line 2" fill={fill} strokeWidth={strokeWidth} stroke={stroke2} className="cls-2" x2="1" y2="120" transform="translate(137 50)"/>
	    <line id="Line_3" data-name="Line 3" fill={fill} strokeWidth={strokeWidth} stroke={stroke2} className="cls-2" x2="79" y2="67" transform="translate(109)"/>
	    <line id="Line_4" data-name="Line 4" fill={fill} strokeWidth={strokeWidth} stroke={stroke1} className="cls-2" x1="79" y2="67"/>
	</svg>
)

export default svg