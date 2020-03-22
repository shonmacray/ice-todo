import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoAction, toggleMarkTodoDone } from "../redux/actions";
import MakeTodoField from "./subComponents/makeTodoField";

export default function Todo() {
  const todos = useSelector(state => state.appReducer);
  const dispatch = useDispatch();

  const deleteTodo = id => {
    dispatch(deleteTodoAction(id));
  };
  const markDone = id => {
    dispatch(toggleMarkTodoDone(id));
  };
  return (
    <div className="container">
      <div className="mb-5">
        <h1 className="display-4">Ice Todo</h1>
        <p className="lead">
          A simple todo application, written with react and redux,
          <br />
          <strong>
            Shon Macray <span />
            🧑🏽‍💻
          </strong>
        </p>
      </div>
      <div className="row">
        <div className="col-6">
          <MakeTodoField todos={todos} />
          <div className="mt-3">
            {todos.map(todo => (
              <div
                key={todo.id}
                className="mb-3 d-flex justify-content-between flex-row align-items-center"
              >
                <h5 className={todo.done ? "w text-warning" : "w"}>
                  {todo.todo}
                </h5>
                <div>
                  <small
                    className="mr-3 text-success"
                    onClick={() => markDone(todo.id)}
                  >
                    Done
                  </small>
                  <button
                    className="btn btn-light"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}
