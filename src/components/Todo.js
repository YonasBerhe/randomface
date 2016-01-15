import React from "react";

import ToDoList from './TodoList';

import AddListItems from './AddListItems';

class Todo extends React.Component {


state = {
    list: ['1', '2', '3'],
    input: ' '
};
  //  buildList => (){
   buildList = () => {
     return this.state.list.map((el, i) => <li key={i}>{el}</li>)
   };

   buildToDoListProps = () => ({
     list: this.state.list,
     buildList: this.buildList
   });

  componentWillMount() {
    // setState()
  };

  addListItem = (e) => {
    e.preventDefault();
    const value  = e.target.value;
    console.log(value)
    this.setState((previousState) => ({
      list: previousState.list.concat(this.state.input)
    }));
  };


updateInput = (event) => {
  this.setState({
    input: event.target.value
  })
};
  render() {
    return (
    <div>
    <AddListItems addListItem={this.addListItem} updateInput={this.updateInput} />

      <ToDoList {...this.buildToDoListProps()} />
    </div>

 );
 }
}

export default Todo;
