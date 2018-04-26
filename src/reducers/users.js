import { RECEIVE_USERS } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,//everything that was in the state. In this case it is just an empty object (see default parameter)
        ...action.users//grab all users from action parameter and spread them
      }
      default :
        return state
  }
}