'use strict'

import '../../../src/css/Activity.less'
import React,{ PropTypes } from 'react'

class Activity extends React.Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		let { act } = this.props
		
		return (
			<div className="Activity-container">
				<div className="Activity-title">Activities</div>
				<ul className="Activity-ul">
					{ act.map( (list) => (
						<list className="Activity-item">{ list }</list>
					) ) }
				</ul>
			</div>
		)
	}
}

Activity.defaultProps = {
	act: ["let's go!","that's right!","go running!"]
}

Activity.propTypes = {
	act: PropTypes.object.isRequired
}

module.exports = Activity