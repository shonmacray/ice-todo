export const addTodo = (id, todo) => {
  return {
    type: "ADD_TODO",
    payload: { id, todo, done: false }
  };
};

export const toggleMarkTodoDone = id => {
  return {
    type: "MARK_TODO_DONE",
    payload: id
  };
};
export const deleteTodoAction = id => {
  return {
    type: "DELETE_TODO",
    payload: id
  };
};
