import React from 'react';
import PropTypes from 'prop-types';
// import {v4} from 'uuid'
import Post from './Post';
import Responsive from 'react-responsive';


// const Desktop = props => <Responsive {...props} minWidth={992} />;
// const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const postListMobileStyle = {
  background: 'yellow'
};

const postListDefaultStyle = {
  background: 'black'
};

function PostList(props){
  return(
    <div>
    <Mobile>
      <div style={postListMobileStyle}>
        {props.masterPostList.map((post)=>
          <Post title = {post.title}
          image = {post.image}
          score = {post.score}
          id = {post.id}
          onDownvote = {props.onDownvote}
          onUpvote = {props.onUpvote}
          onPostChange = {props.onPostChange}
          key = {post.id}/>
        )}
      </div>
    </Mobile>
    <Default>
      <div style={postListDefaultStyle}>
        {props.masterPostList.map((post)=>
          <Post title = {post.title}
          image = {post.image}
          score = {post.score}
          id = {post.id}
          onDownvote = {props.onDownvote}
          onUpvote = {props.onUpvote}
          onPostChange = {props.onPostChange}
          key = {post.id}/>
        )}
      </div>
    </Default>
    </div>
  );
}

PostList.propTypes={
  masterPostList: PropTypes.array.isRequired,
  onDownvote: PropTypes.func.isRequired,
  onUpvote: PropTypes.func.isRequired,
  onPostChange: PropTypes.func.isRequired
};

export default PostList;
