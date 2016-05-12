import {CHANGE_TAB1,CHANGE_TAB2,CHANGE_TAB3} from '../../action-types/headerNavTabs'

const initState = {
	items:['美好','转眼','变了样' ]
}

export default function headerNav(state=initState,action){
	switch(action.type){
		case CHANGE_TAB1:
			return {items:['每日精选','最新原创','今日热题' ]}
		case CHANGE_TAB2:
			return {items:['美好','转眼','变了样' ]}
		case CHANGE_TAB3:
			return {items:['像是','底片','见了光' ]}
		default:
			return state
	}
}