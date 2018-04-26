//Reducer describes how an application's state changes

import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import tweets from './tweets'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,//shorthand property name. Same as "authedUser: authedUser"
  users,
  tweets,
  loadingBar: loadingBarReducer
})