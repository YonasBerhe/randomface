import React from 'react';

class AddListItems extends React.Component {

render() {
  //  var = style = {
  //    backgroundColor: 'red',
  //  }
  return (
      // <div style={style} >

          <div>
      <form onSubmit={this.props.addListItem}>
        <input type= "text" onChange={this.props.updateInput}   value={this.props.input}>
        </input>
        <button className="btn btn-default" onClick={this.props.addListItem}>Add Item</button>
      </form>
      </div>
    );
  }
}


export default AddListItems;
