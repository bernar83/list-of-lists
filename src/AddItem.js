import React, { Component } from 'react';

class AddItem extends Component {

  constructor() {
    super();
    this.state = {
      newItem:{}
    }
  }

  handleItemSubmit(e) {
    this.props.addItem(this.state.newItem, this.props.idName);
    e.preventDefault(); 
  }
    
  handleChange(e) {
    this.setState({
      newItem: {name: e.target.value}
    });
  }

  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className='addItemDiv'>
        <h4>Add {this.props.idName}</h4>
        <form ref='form' onSubmit={this.handleItemSubmit.bind(this)}>
          <div id={divName} ref={divName}>
            <label>Name</label><br />
            <input onChange={this.handleChange.bind(this)} type='text' ref='id' required />
          </div>
          <br />
          <input type='submit' value='Submit' />
          <br />
        </form>
      </div>
    );
  }

}

export default AddItem;
