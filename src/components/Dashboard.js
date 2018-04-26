import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'

class Dashboard extends Component {//is a container so it needs the connect function
  render() {
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
          {this.props.tweetIds.map((id) => (
            <li key={id}>
              <Tweet id={id}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

//this is called every time the store updates
function mapStateToProps ({ tweets }) {//uses destructuring syntax to extract the tweets part out of the store
  return {
    tweetIds: Object.keys(tweets)//tweetIds is now a property of this container/component
      .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
  }
}

//first argument subscribes to Redux store updates
export default connect(mapStateToProps)(Dashboard)