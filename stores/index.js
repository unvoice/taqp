import {createStore} from 'redux'
import rootReducer from '../reducers/index'

export default function rootStore(initState){
	const store = createStore(rootReducer,initState);
	
	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers').default
			store.replaceReducer(nextReducer)
		})
	}

	return store
}