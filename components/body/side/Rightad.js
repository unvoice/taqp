'use strict'

import '../../../src/css/Rightad.less'
import React,{ PropTypes } from 'react'

class Rightad extends React.Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

	render(){
		let { ad } = this.props

		return (
			<div className="Rightad-container">
				<img className="Rightad-img" src={ ad.img } alt={ ad.des } />
			</div>
		)
	}
}

Rightad.defaultProps = {
	ad: { img:"../../../assets/images/ad.jpg",des:"ad is good!" }
}

Rightad.propTypes = {
	ad: PropTypes.object.isRequired
}

module.exports = Rightad