import React from 'react'

class Post extends React.Component {

  handleClick = (e) => {
    this.props.deletePost(e.target.id)
  }

  render(){
    return(
      <li>{this.props.content} submited by:{this.props.user}
        <button onClick={this.handleClick} id={this.props.id} >Delete</button>
        <button>Edit</button>
      </li>
    )
  }
}
export default Post
