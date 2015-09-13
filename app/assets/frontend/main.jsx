import TweetBox from "./components/TweetBox";
import TweetsList from "./components/TweetsList";

let mockTweets = [
  { id: 1, name: 'Andrew Broman', body: 'My #FirstTweet' },
  { id: 2, name: 'Andrew Broman', body: 'My #SecondTweet' },
  { id: 3, name: 'Andrew Broman', body: 'My #ThirdTweet' },
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweetsList: mockTweets };
  }
  addTweet(tweetToAdd) {
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({
      id: Date.now(),
      body: tweetToAdd,
      name: 'Guest',
    });

    this.setState({ tweetsList: newTweetsList });
  }
  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetsList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    React.render(<Main />, reactNode);
  }
};

$(documentReady);
