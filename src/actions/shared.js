import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'//importing action creator
import { receiveTweets } from '../actions/tweets'//importing action creator
import { setAuthedUser } from '../actions/authedUser'//importing action creator
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

//redux thunk pattern function because of an async request
//this needs middleware to function correctly because we return a function instead of an object
export function handleInitialData() {//this will be called in App.js in componentDidMount()
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()//this function returns a promise
      .then(({ users, tweets }) => {//promise resolves to an object consisting of 2 properties
        dispatch(receiveUsers(users))//receiveUsers returns an action which is dispatched to update the store (a reducer handles this dispatches)
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}