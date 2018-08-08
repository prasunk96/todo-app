import React from "react";
import { connect } from "react-redux";

const todoList = props => {
  return (
    <ul>
      {props.list.map((item, index) => {
        return <li key={index}>{item.text}</li>;
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    list: state.list
  }
}


export default connect(mapStateToProps)(todoList);
// connect()(componentX)  returns componentX with added functionality
