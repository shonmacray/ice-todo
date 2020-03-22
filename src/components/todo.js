import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoAction, toggleMarkTodoDone } from "../redux/actions";
import MakeTodoField from "./subComponents/makeTodoField";
import SortField from "./subComponents/sortFields";

export default function Todo() {
  const todos = useSelector(state => state.todoReducer);
  const app = useSelector(state => state.appReducer);
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
            {app === "NORMAL"
              ? todos.map(todo => (
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
                ))
              : app === "SORT_FINISHED"
              ? todos
                  .filter(todo => todo.done === true)
                  .map(todo => (
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
                  ))
              : null}
          </div>
        </div>
        <div className="col-6">
          <SortField />
        </div>
      </div>
    </div>
  );
}
