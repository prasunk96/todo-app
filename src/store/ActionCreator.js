import axios from "axios";
import { connect } from "react-redux";


const getTodoActionCreator = () => {

  //fetch the current list of todos from the server
  return function (dispatch, getState) {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        // handle success
        var responseItems = response.data.slice(0, 3)

        for (var i = responseItems.length - 1; i >= 0; i--) {
          responseItems[i].checked = false;
          responseItems[i].text = responseItems[i].title;
        }

        dispatch({
          type: "INITIAL_TODO_LIST", payload: {
            items: responseItems
          }
        });
        

      })
      .catch(error => {
        // handle error
        console.log(error);
      })
  }

  return { type: "INITIAL_TODO_LIST", payload: {} }
}

export default getTodoActionCreator;