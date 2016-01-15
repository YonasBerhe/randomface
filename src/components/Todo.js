import React from "react";

import ToDoList from './TodoList';

import AddListItems from './TodoList';

class ToDo extends React.Components {


  state = {
    list: ['thing', 'thing', 'thing']

  };
  //  buildList => (){
   buildList= () => {
     return
          this.state.list.map((el, i) => <li key={i}>{el}</li>)
   };

   buildToDoListProps = () => ({
     list: this.state.list,
     buildList: this.buildList
   });

  componentWillMount() {
    // setState()
  };

  addListItem = () => {

    e.preventDefault();

    const { value, tacos} = e.target;
    this.setState((previousState) => ({
      list: previousState.list.concat(value)
    }))
  };

  render() {
    return (


    // one root Component

    <div>
    <AddListItems addListItem={this.addListItem} />
    //spread operator
      <ToDoList {...this.buildToDoListProps()} />
    </div>

 );
 }
}

export default Todo;
