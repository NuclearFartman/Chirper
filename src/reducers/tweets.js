import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets'

//a reducer always has two parameters: The state and an action
//This reducer only takes care about the tweets part of the state
export default function tweets (state = {}, action) {
  switch(action.type) {
    case RECEIVE_TWEETS :
      return {
        ...state,
        ...action.tweets//merge all of the tweets to the returned object
      }
    case TOGGLE_TWEET :
      return {
        ...state,//spread the previous tweets NOT THE WHOLE STATE. This reducer is only responsible for tweets part of the state!!!
        [action.id]: {//this specific tweet. If this key is already in state then its updated, if not it is created.
          ...state[action.id],
          likes: action.hasLiked === true
            ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
            : state[action.id].likes.concat([action.authedUser])
        }
      }
    case ADD_TWEET :
      const { tweet } = action

      let replyingTo = {}
      if(tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo]: {
            ...state[tweet.replyingTo],
            replies: state[tweet.replyingTo].replies.concat([tweet.id])
          }
        }
      }

      return {
        ...state,
        [action.tweet.id]: action.tweet,
        ...replyingTo,
      }
    default :
      return state
  }
}