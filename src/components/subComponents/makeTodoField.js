import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";

export default function MakeTodoField({ todos }) {
  const [todo, setTodo] = useState("");
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
  return (
    <form onSubmit={handleSubmit} className="d-flex flex-row mb-3">
      <textarea
        placeholder="Write your todo"
        value={todo}
        onChange={text => setTodo(text.target.value)}
        className="form-control col-6"
      ></textarea>
      <div className="ml-5">
        <button type="submit" onClick={submitTodo} className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
