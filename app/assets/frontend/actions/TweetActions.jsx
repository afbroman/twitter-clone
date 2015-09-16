import API from "../API"

export default {
  getAllTweets() {
    console.log(1, "TweetActions.getAllTweets");
    API.getAllTweets();
  },
  sendTweet(body) {
    console.log("TweetActions.createTweet");
    API.createTweet(body);
  }
}
