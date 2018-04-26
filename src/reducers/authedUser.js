import { SET_AUTHED_USER } from '../actions/authedUser'

//this just sets the authedUser slice of the store
export default function authedUser (state = null, action) {
  switch(action.type) {
    case SET_AUTHED_USER :
      return action.id//no spread operator because this slice of the store just has one element
    default :
      return state
  }
}