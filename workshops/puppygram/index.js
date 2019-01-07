import React from "react";
import ReactDOM from "react-dom";

import Doge from "./Doge";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      comments: ["woww", "what a great boyee", "such flufff"]
    };

    // Bound function
    // Ugly syntax, but tldr; it ensures that `this` always refers
    // to an instance of App
    this._onComment = comment => {
      console.log(`Updating state, new comment: ${comment}`);

      const comments = this.state.comments;

      const newComments = [].concat(comments, [comment]);

      this.setState({ comments: newComments });
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Feed comments={this.state.comments} onComment={this._onComment} />
      </div>
    );
  }
}

function Header() {
  return <h1>PUPPY GRAM 🐶🐶🐶</h1>;
}

function Feed(props) {
  return (
    <div>
      <Doge dogeId="1p" comments={props.comments} onComment={props.onComment} />
      <Doge dogeId="2p" comments={[]} onComment={props.onComment} />
      <Doge dogeId="3p" comments={[]} onComment={props.onComment} />
    </div>
  );
}

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
