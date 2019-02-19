import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import Header from './Header';

// const MasterPostList=
// [
//   {
//     title: 'The Incredible Shrinking Women',
//     image: 'https://external-preview.redd.it/DQDVg56ZkQIdskmsOIYpA8NF6XvORc5iApBtwgXaZio.png?width=640&crop=smart&auto=webp&s=fceaad86df2df53dfa4d21464fd5c29fd2716134',
//     score: 72,
//     id: '1'
//   },
//   {
//     title: 'The Food thats incredible',
//     image: 'https://www.johnspizza.com/images/food/Food-Pizza.jpg',
//     score: 100,
//     id: '2'
//   },
//   {
//     title: 'The Incredible town !!',
//     image: 'https://media-cdn.tripadvisor.com/media/photo-s/12/66/0f/00/paseando-por-el-pueblo.jpg',
//     score: 135,
//     id: '3'
//   }
// ];

const appStylesheet = {
  width: '650px',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  // background: 'blue'
}

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      MasterPostList: [
        // {
        //   title: 'The Incredible Shrinking Women',
        //   image: 'https://external-preview.redd.it/DQDVg56ZkQIdskmsOIYpA8NF6XvORc5iApBtwgXaZio.png?width=640&crop=smart&auto=webp&s=fceaad86df2df53dfa4d21464fd5c29fd2716134',
        //   score: 72,
        //   id: '1'
        // },
        // {
        //   title: 'The Food thats incredible',
        //   image: 'https://www.johnspizza.com/images/food/Food-Pizza.jpg',
        //   score: 100,
        //   id: '2'
        // },
        // {
        //   title: 'The Incredible town !!',
        //   image: 'https://media-cdn.tripadvisor.com/media/photo-s/12/66/0f/00/paseando-por-el-pueblo.jpg',
        //   score: 135,
        //   id: '3'
        // }
      ]
    }
    this.handleAddToMasterPostList = this.handleAddToMasterPostList.bind(this);
  }

  handleAddToMasterPostList(newPost) {
    let newMasterPostList = this.state.MasterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({MasterPostList: newMasterPostList});
  }

  downvotePostInPostList(postId){

  }

  render(){
    return (
      <div style={appStylesheet}>
      <Header/>
      <Switch>
      <Route exact path='/' render={()=><PostList masterPostList={this.state.MasterPostList}/>}/>
      <Route path='/new_post' render={()=><NewPostForm onNewPostCreation = {this.handleAddToMasterPostList}/>}/>
      </Switch>
      </div>
    )
  }

}
export default App
