'use strict'

import '../../src/css/comment.less'
import React,{ PropTypes } from 'react'

class Comment extends React.Component {
	constructor (props) {
		super(props)

		this.state = {

		}
	}

	render() {
		let { comments } = this.props

		return (
			<div className="container"> 
				<ul className="comment-container">
					{ comments.map( (list) => (
						<li className="comment-item">
							<p className="comment-title">{ list.title }</p>
							<p className="comment-text">{ list.text }</p>
							<button className="comment-btn">回复</button>
						</li>
					) ) }
				</ul>
			</div>
		)
	}
}

Comment.defaultProps = {
	comments:[
		{ title:"heading1",text:"hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?",img:[''] },
		{ title:"heading2",text:"hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?",img:[''] },
		{ title:"heading3",text:"hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?",img:[''] },
		{ title:"heading1",text:"hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?",img:[''] },
		{ title:"heading2",text:"hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?",img:[''] },
		{ title:"heading3",text:"hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?",img:[''] },
		{ title:"heading1",text:"hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?",img:[''] },
		{ title:"heading2",text:"hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?",img:[''] },
		{ title:"heading3",text:"hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?",img:[''] },
		{ title:"heading1",text:"hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?",img:[''] },
		{ title:"heading2",text:"hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?",img:[''] },
		{ title:"heading3",text:"hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?hello hao are you im fine thanks! you are pig !are you right?",img:[''] }
	]
}

Comment.propTypes = {
	comments: PropTypes.object.isRequired
}

module.exports = Comment;