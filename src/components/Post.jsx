import React from 'react';
import PropTypes from 'prop-types';

const imageStyle = {
  width: '50%',
  maxWidth: '580px',
  minWidth: '500px',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const postStyle={
  marginBottom: '5px',
  background: 'blue',
  width: '600px',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
};

function Post(props){

  function downvote(event) {
    event.preventDefault();
    props.onDownvote(props.id);
    props.onPostChange();
  }

  function upvote(event) {
    event.preventDefault();
    props.onUpvote(props.id);
    props.onPostChange();
  }

  return(
    <div style={postStyle}>
      <h3>{props.title}</h3>
      <img style={imageStyle} src={props.image}/>
      <h5>{props.score}</h5>
      <button onClick={downvote}>Downvote</button>
      <button onClick={upvote}>Upvote</button>
    </div>
  );
}

Post.propTypes={
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onDownvote: PropTypes.func.isRequired,
  onUpvote: PropTypes.func.isRequired,
  onPostChange: PropTypes.func.isRequired
};

export default Post;
