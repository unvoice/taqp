import React from 'react'
import ReactDOM from 'react-dom'

import './src/css/body.less'

import Header from './components/Header'
import Comment from './components/body/Comment'
import Rightad from './components/body/side/Rightad'
import Activity from './components/body/side/Activity'

import { Provider, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as headerNavActions from './actions/headerNav/'
import rootStore from './stores/index'

let initHeaderNav = {
	headerNav: ['美好','转眼','变了样' ]
}

let initHeaderTabs = {
	headerTabs: ['session','local','babel']
}

let initState = Object.assign({},initHeaderNav,initHeaderTabs);

let store = rootStore(initState);

class App extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}
	render(){
		const { headerNav,headerTabs,actions } = this.props

		return (
			<div>
				<Header headerNav={headerNav} headerTabs={headerTabs} />
				<div className="container">
					<Comment />
					<Rightad />
					<Activity />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		headerNav:state.headerNav,
		headerTabs:state.headerTabs
	}
}

function mapDispatchToProps(dispatch){
	let boundHeaderNav = bindActionCreators(headerNavActions,dispatch);
	return {
		actions: Object.assign({},boundHeaderNav)
	}
}

App = connect(mapStateToProps,mapDispatchToProps)(App);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('container')
)
