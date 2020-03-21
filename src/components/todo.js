import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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
      dispatch({
        type: "ADD_TODO",
        payload: { id: index, todo }
      });
      setTodo("");
    }
  };
  const deleteTodo = id => {
    dispatch({
      type: "DELETE_TODO",
      payload: id
    });
  };
  return (
    <div className="container">
      <div class="mb-5">
        <h1 class="display-4">Ice Todo</h1>
        <p class="lead">
          A simple todo application, written with react and redux,
          <br /> by <strong>Shon Macray</strong>
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
                <h5 className="w-75">{todo.todo}</h5>
                <div>
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
