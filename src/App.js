import React from "react";
import { Provider } from "react-redux";

import Store from "./redux/store";
import "./App.css";
import Todo from "./components/todo";

function App() {
  return (
    <Provider store={Store}>
      <Todo />
    </Provider>
  );
}

export default App;
