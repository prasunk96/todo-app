import React, {Component} from "react";
import { connect } from "react-redux";


class ListHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
    this.addToDoHandler = this.addToDoHandler.bind(this);
  }
  addToDoHandler() {
    console.log("addToDoHandler");
    
    this.props.addItem(this.state.text);
  }

  inputChangeHandler(event) {
    this.setState({
      text: event.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={(event) => this.inputChangeHandler(event)}/>
        <button type="button" onClick={() => this.addToDoHandler()}>Add</button>
      </div>
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: (value) => dispatch({
      type: "ADD_TODO",
      payload: {
        text: value,
        checked: false
      }
    })
  }
}

export default connect(null, mapDispatchToProps)(ListHeader);

