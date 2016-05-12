'use strict'

import '../src/css/header.less'
import React, { PropTypes } from 'react'

class Header extends React.Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}
	render() {
		let { actions } = this.props
		
		return (
			<div className="header">
				<div className="header-top">
					<div className="container">
						<a href="#" className="header-brand">TAQP</a>
						<strong className="header-cut">日历</strong>
						<button className="header-entry">会员入口</button>
					</div>
				</div>
				<ul className="header-bottom">
					<div className="container">
						<li>
							<a href="#" className="header-nav-list">后怕短故事</a>
							<ul className="header-nav-box">
								<li className="header-nav-box-item">卡片阅读</li>
								<li className="header-nav-box-item">ojeri</li>
								<li className="header-nav-box-item">njk</li>
							</ul>
						</li>
						<li>
							<a href="#" className="header-nav-list">he</a>
							<ul className="header-nav-box">
								<li className="header-nav-box-item">fhuds</li>
								<li className="header-nav-box-item">ojeri</li>
								<li className="header-nav-box-item">njk</li>
							</ul>
						</li>
						<li>
							<a href="#" className="header-nav-list">she</a>
							<ul className="header-nav-box">
								<li className="header-nav-box-item">fhuds</li>
								<li className="header-nav-box-item">ojeri</li>
								<li className="header-nav-box-item">njk</li>
							</ul>
						</li>
					</div>
				</ul>
			</div>
		)
	}
}

Header.defaultProps = {
	headerNav: ['短篇','长篇','真案']
}

Header.propTypes = {
	headerNav: PropTypes.object.isRequired
}

module.exports = Header;