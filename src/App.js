import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import PostsContainer from './PostsContainer'
import NavBar from './NavBar'
import Form from './Form'

const routeTypes = (type ,data) => {
  return({
  method: 'post',
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json'
  }, body: JSON.stringify(data)
})}

const URL = "http://localhost:3000/posts"


class App extends Component {
  constructor(){
    super();

    this.state = {
      posts:[],
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

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render= {() => <PostsContainer posts={this.state.posts} deletePost={this.deletePost} /> } />
          <Route exact path="/new" render= {() => <Form addPost={this.addPost}/> } />
        </div>
      </Router>
    );
  }
}

export default App;
