import React from 'react';
import Post from './post';
import Form from './Form';
import EditForm from './editForm'

const routeTypes = (type ,data) => {
  return({
  method: 'post',
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json'
  }, body: JSON.stringify(data)
})}

const URL = "http://localhost:3000/posts"

class PostsContainer extends React.Component {
  constructor(){
    super();

    this.state = {
      posts:['data'],

    }
  }

  componentDidMount() {
    fetch(URL).then(res => res.json()).then(posts => this.setState({posts:posts}))
  }

  handleEditChange = (e) => {
    var prevData = this.state.posts.slice()
    prevData[e.target.id][e.target.name] = e.target.value
    this.setState({posts:prevData})
  }

  updateEdit = (data) => {

  }

  addPost = (data) => {
    var currentState = this.state.posts
    currentState.push(data)
    this.setState({posts:currentState})

    var info = routeTypes("post", data)
    fetch("http://localhost:3000/posts", info )
  }

  deletePost = (key) => {
    var newPostState = this.state.posts.filter(x => x.id.toString() !== key)
    this.setState({posts:newPostState})
    fetch(URL+`/${key}`, {
      method: 'delete'
    })
  }

  render(){
    var postsData = this.state.posts.map( (post, i) => <Post content={post.content} user={post.user} id={post.id} deletePost={this.deletePost} />)
    console.log(this.state)
    return(
      <div>
        <Form addPost={this.addPost}/>
        <ul>{postsData}</ul>
      </div>
    )
  }
}

export default PostsContainer;

/* <EditForm content={post.content} user={post.user} id={i} deletePost={this.deletePost} id={i} handleEditChange={this.handleEditChange} updateEdit={this.updateEdit} key={i} /> */
