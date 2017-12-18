import React from 'react'

class EditForm extends React.Component{

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.updateEdit()
  }

  handleChange = (e) => {
    this.props.handleEditChange(e)
  }

  render(){
    return(
    <form onSubmit={this.handleSubmit}>
      <input type="text" name="content" value={this.props.content} id={this.props.id} onChange={this.handleChange}/>
      <input type="text" name="user" value={this.props.user} id={this.props.id} onChange={this.handleChange}/>
      <button type="submit">Update</button>
    </form>
  )
  }
}

export default EditForm;
