import React from 'react';

class Form extends React.Component {
  constructor(){
    super();

    this.state = {
      contentString:'',
      userString: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let x = {content: this.state.contentString, user: this.state.userString}
    this.props.addPost(x)
    this.setState({contentString: ''})
    this.setState({userString: ''})
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.contentString} name="contentString" onChange={this.handleChange}/>
        <input  type="text" value={this.state.userString} name="userString" onChange={this.handleChange}/>
        <input type="submit" />
      </form>
    )
  }
}
export default Form
