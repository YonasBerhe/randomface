import React from 'react';

class AddListItems extends React.Component {

render() {
  return (
      <div>
      <form onSubmit={this.props.addListItem}>
        <input type= "text">
            <button className="btn btn-default">Add Item</button>
        </input>
      </form>
      </div>
    );
  }
}


export default AddListItems;
