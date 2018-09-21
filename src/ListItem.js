import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
      super(props);
      this.state = { 
        color: 'black',
        isDone: false
      };
    }

    handleClick() {
      this.setState({
        color: !this.state.isDone ? 'gray' : 'black',
        isDone: !this.state.isDone
      });
    }

  render() {
    var item = this.props.item;
    var name = item.name;

    return (
	    <span onClick={this.handleClick.bind(this)} style={{color: this.state.color, cursor: 'pointer'}}>
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;

