import React, { Component } from 'react';
import Lists from './Lists.js';
import AddList from './AddList.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      lists: [], // this holds the name of each list
      items: {} // this property names of this object are the names of the lists
    };

    this.handleAddList = this.handleAddList.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  /**
   * This function takes the state of an AddList component as its parameter
   * and updates the state of this App component by adding a new entry to the "lists"
   * array and then adding a new property in the "items" object that has the same name
   * as the value put into the "lists" array. 
   */
  handleAddList(s) {
    const lists = this.state.lists;
    lists.push(s);
    const items = this.state.items;
    Object.defineProperty(items, s, {
      value: []
    });

    this.setState(prevState => ({
      lists: lists,
      items: items
    }));
  }

  /**
   * This function takes the state of an AddItem component as its parameter
   * and updates the state of this App component by adding a new value to the 
   * appropriate array in the "items" property of the state. 
   */
  handleAddItem(s, name) {
    const oldItems = this.state.items
    var items = oldItems[`${name}`];
    items.push(s);
    Object.defineProperty(oldItems, name, {
      value: items
    });
    this.setState({
      items: oldItems
    });
  }

  /**
   * Renders the component.
   */
  render() {
    return (
      <div className="App">
        <AddList addList={this.handleAddList} />
        <div id="listsDiv" className="List">
          <Lists lists={this.state.lists} items={this.state.items} addItem={this.handleAddItem} />
        </div>
      </div>
    );
  }

}

export default App;
