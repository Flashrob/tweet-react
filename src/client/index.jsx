import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets'

class UrlEntity extends React.Component {
  render(){

    console.log("URLEntityt", this.props.media)

    return (
      <div>
      <img src={this.props.media}/>
      </div>
    )
  }
}

class Entity extends React.Component {
  render(){

    console.log("Entity", this.props.entity)

    let mediaObject;
    if (this.props.entity.media){
      mediaObject = <UrlEntity media={this.props.entity.media[0].media_url}/>
    }

    return (
      <div>
        {mediaObject}
      </div>
    )
  }
}

class User extends React.Component {
  render(){

    return(
      <div>
        <p>{this.props.tweetObject.user.screen_name} <span class="muted">@{this.props.tweetObject.user.screen_name}</span></p>
        <Entity entity={this.props.tweetObject.entities}/>
      </div>
    )
  }
}

class Tweet extends React.Component {
  render() {

    return (
      <div>
        <User tweetObject={this.props.tweetObject}/>
        {this.props.tweetObject.text}
      </div>
    )
  }
}

class App extends React.Component {
  render() {

    const allTweets = tweets.tweets.map((tweet)=>{
      return <Tweet tweetObject={tweet}/>
    })

    return (
      <div>
        {allTweets}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");
