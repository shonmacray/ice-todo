import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodoAction,
  toggleMarkTodoDone
} from "../redux/actions";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const todos = useSelector(state => state.appReducer);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
  };
  const submitTodo = () => {
    if (todo.trim() !== "") {
      let index = todos.length;
      index++;
      dispatch(addTodo(index, todo));
      setTodo("");
    }
  };
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
          <br /> by{" "}
          <strong>
            Shon Macray <span />
            🧑🏽‍💻
          </strong>
        </p>
      </div>
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit} className="d-flex flex-row mb-3">
            <textarea
              placeholder="Write your todo"
              value={todo}
              onChange={text => setTodo(text.target.value)}
              className="form-control col-6"
            ></textarea>
            <div className="ml-5">
              <button
                type="submit"
                onClick={submitTodo}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
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
