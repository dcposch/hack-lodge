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

function Comments(props) {
  const { comments } = props;
  // Equivalent: const comments = props.comments

  return (
    <div>
      {comments.map((c, index) => (
        <div key={index}>{c}</div>
      ))}
    </div>
  );
}
