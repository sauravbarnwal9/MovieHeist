import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import {reducer as AuthReducer} from './AuthReducer/reducer'
import {reducer as AppReducer }from './AppReducer/reducer'
import thunk from 'redux-thunk';
const root_reducer=combineReducers({AuthReducer,AppReducer}) 
export const store=legacy_createStore(root_reducer,applyMiddleware(thunk))
