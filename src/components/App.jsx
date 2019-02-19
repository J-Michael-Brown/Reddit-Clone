import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import Header from './Header';

const appStylesheet = {
  width: '650px',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
};

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      MasterPostList: []
    };
    this.handleAddToMasterPostList = this.handleAddToMasterPostList.bind(this);
    this.downvotePostInMasterPostList = this.downvotePostInMasterPostList.bind(this);
    this.upvotePostInMasterPostList = this.upvotePostInMasterPostList.bind(this);
  }

  handleAddToMasterPostList(newPost) {
    let newMasterPostList = this.state.MasterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({MasterPostList: newMasterPostList});
  }

  downvotePostInMasterPostList(postId){
    let newMasterPostList = this.state.MasterPostList.map((post) => {
      if(post.id===postId) {
        post.score--;
      }
      return post;
    });
    this.setState({MasterPostList: newMasterPostList});
  }

  upvotePostInMasterPostList(postId){
    let newMasterPostList = this.state.MasterPostList.slice();
    for (var postListIndex = 0; postListIndex < newMasterPostList.length; postListIndex++) {
      if(newMasterPostList[postListIndex].id==postId){
        newMasterPostList[postListIndex].score++;
        break;
      }
    }
    this.setState({MasterPostList: newMasterPostList});
  }

  render(){
    return (
      <div style={appStylesheet}>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><PostList masterPostList={this.state.MasterPostList}
            onDownvote={this.downvotePostInMasterPostList} onUpvote={this.upvotePostInMasterPostList}/>}/>
          <Route path='/new_post' render={()=><NewPostForm
            onNewPostCreation={this.handleAddToMasterPostList}/>}/>
        </Switch>
      </div>
    );
  }

}
export default App;
