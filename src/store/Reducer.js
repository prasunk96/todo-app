import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';


const initState = {
  list: [
    {
      text: "Test",
      checked: false
    }
  ]
};

const reducer = (state = initState, action) => {
  let newState ;
  switch (action.type.toUpperCase()) {
    case "INITIAL_TODO_LIST":
      newState = { ...state, list: action.payload.items };
      return newState;
      break;
    case "ADD_TODO":
      console.log("add_Todo");
     newState = { ...state };
      newState.list = [
        ...newState.list,
        { text: action.payload.text, checked: false }
      ];

      return newState;
      break;

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
