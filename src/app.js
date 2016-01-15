import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';

class App extends React.Component {
  helloWorld() {
    console.log("hello");
  }
  render(){
    console.log(this.helloWorld());
    return(
      <div><Todo /> </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
