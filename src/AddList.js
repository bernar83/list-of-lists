import React, { Component } from 'react';

class AddList extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
        value: ''
    };
  }

  handleSubmit(e) {
    this.props.addList(this.state.value);
    e.preventDefault(); 
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div id="addListDiv">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div id='addList'>
            <label>What will be your next list?&nbsp;(Example titles: Cat Names, Christmas Wish List, etc.)&nbsp;
            <input onChange={this.handleChange.bind(this)} type='text' ref='id' id='newID' required></input>
            </label>
          </div>
          <br />
          <input type='submit' id='submitList' value='Create List' />
        </form>
      </div>
    );
  }
}

export default AddList;
