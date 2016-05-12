import headerNavStore from '../../stores/headerNav'
import {changeTab1,changeTab2,changeTab3} from '../../actions/headerNav'

let store = headerNavStore();

let unsubscribe = store.subscribe(() =>
	console.log(store.getState())
);

store.dispatch(changeTab1);
store.dispatch(changeTab2);
store.dispatch(changeTab3);