import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return(
     <div>
      <h3>{props.title}</h3>
      <h4>{props.image}</h4>
      <h5>{props.score}</h5>
    </div>
  )
}

Post.propTypes={
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};

export default Post;
