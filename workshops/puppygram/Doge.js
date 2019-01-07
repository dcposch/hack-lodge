import React from "react";

export default function Doge(props) {
  const dogeId = props.dogeId;
  const imgUrl = `http://www.placepuppy.net/${dogeId}/400/250`;
  // Equivalent: const imgUrl = 'http://www.placepuppy.net/' + dogeId + '/400/250';

  return (
    <div>
      <img src={imgUrl} />
      <Comments comments={props.comments} onComment={props.onComment} />
    </div>
  );
}

class Comments extends React.Component {
  constructor() {
    super();

    this._textboxRef = React.createRef();

    this._submitComment = () => {
      const comment = this._textboxRef.current.value;
      if (comment.trim() === "") {
        return;
      }
      console.log("Submit comment: " + comment);
      this.props.onComment(comment);
      this._textboxRef.current.value = "";
    };
  }

  render() {
    const { comments } = this.props;
    // Equivalent: const comments = props.comments

    return (
      <div>
        <div>comments!</div>
        {comments.map((c, index) => (
          <div key={index}>{c}</div>
        ))}

        <textarea ref={this._textboxRef} />
        <button onClick={this._submitComment}>wow</button>
      </div>
    );
  }
}
