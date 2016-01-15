import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  helloWorld() {
    console.log("hello");
  }
  render(){
    console.log(this.helloWorld());
    return(
      <div>Hello General Assembly. Welcome to React</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
