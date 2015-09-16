import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import { EventEmitter } from "events";

let _tweets = [];
const CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter {
  getAll() {
    console.log("TweetStore.getAll")
    return _tweets.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    });
  }
  emitChange() {
    console.log(5, "TweetStore.emitChange");
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    console.log("addChangeListener");
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register( action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
      console.log(4, "TweetStore received tweets");
      _tweets = action.rawTweets;
      console.log(_tweets);
      TweetStore.emitChange();
      break;
    case ActionTypes.RECEIVED_ONE_TWEET:
      console.log("TweetStore received one tweet");
      _tweets.unshift(action.rawTweet);
      TweetStore.emitChange();
      break;
    default:
  }
});

export default TweetStore;
