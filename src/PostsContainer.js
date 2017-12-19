import React from 'react';
import Post from './post';
import Form from './Form';
import EditForm from './editForm'

class PostsContainer extends React.Component {


  render(){
    var postsData = this.props.posts.map( (post, i) => <Post content={post.content} user={post.user} id={post.id} deletePost={this.props.deletePost} />)
    console.log(this.state)
    return(
      <div>
        <ul>{postsData}</ul>
      </div>
    )
  }
}

export default PostsContainer;

/* <EditForm content={post.content} user={post.user} id={i} deletePost={this.deletePost} id={i} handleEditChange={this.handleEditChange} updateEdit={this.updateEdit} key={i} /> */
