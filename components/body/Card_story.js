'use strict'

import '../../src/css/comment.less'
import React,{ PropTypes } from 'react'

class Card_story extends React.Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render () {
		let { card_story } = this.props
	
		return (
			<div className="container">
				<ul className="card-container">
					{ card_story.map( (story) => (
						<li className="card-box">
							<p className="card-title">{ story.title }</p>
							<p className="card-info">
								<span className="card-author">{ story.author }</span>
								<span className="card-author">{ story.time.toLocaleString() }</span>
							</p>
							<p className="card-text">{ story.text }</p>
						</li>
					) ) }
				</ul>
			</div>
		)
	}
}

Card_story.defaultProps = {
	card_story: [
		{ title:"no1",text:"fndaj vc, vzx, vm,cx vopcz ,. z flafldm ,.zc klap ,zxcmvkl  zxkf akddm,zm ,lzxcm klvc xzlc, mvlzldajo; glkm vmsoi jgos",author:"jack",time:1531515854 },
		{ title:"no1",text:"fndaj vc, vzx, vm,cx vopcz ,. z flafldm ,.zc klap ,zxcmvkl  zxkf akddm,zm ,lzxcm klvc xzlc, mvlzldajo; glkm vmsoi jgos",author:"jack",time:1531515854 },
		{ title:"no1",text:"fndaj vc, vzx, vm,cx vopcz ,. z flafldm ,.zc klap ,zxcmvkl  zxkf akddm,zm ,lzxcm klvc xzlc, mvlzldajo; glkm vmsoi jgos",author:"jack",time:1531515854 },
		{ title:"no1",text:"fndaj vc, vzx, vm,cx vopcz ,. z flafldm ,.zc klap ,zxcmvkl  zxkf akddm,zm ,lzxcm klvc xzlc, mvlzldajo; glkm vmsoi jgos",author:"jack",time:1531515854 },
		{ title:"no1",text:"fndaj vc, vzx, vm,cx vopcz ,. z flafldm ,.zc klap ,zxcmvkl  zxkf akddm,zm ,lzxcm klvc xzlc, mvlzldajo; glkm vmsoi jgos",author:"jack",time:1531515854 },
		{ title:"no1",text:"fndaj vc, vzx, vm,cx vopcz ,. z flafldm ,.zc klap ,zxcmvkl  zxkf akddm,zm ,lzxcm klvc xzlc, mvlzldajo; glkm vmsoi jgos",author:"jack",time:1531515854 },
		{ title:"no1",text:"fndaj vc, vzx, vm,cx vopcz ,. z flafldm ,.zc klap ,zxcmvkl  zxkf akddm,zm ,lzxcm klvc xzlc, mvlzldajo; glkm vmsoi jgos",author:"jack",time:1531515854 }
	]
}

Card_story.propTypes = {
	card_story: PropTypes.object.isRequired
}