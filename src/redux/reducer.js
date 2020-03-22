const todoState = [
  {
    id: 1,
    todo:
      "I create new repos on github, tweets, and blogs everyday. I am passionate about tech.",
    done: false
  }
];

export const appReducer = (state = todoState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { ...action.payload }];
    case "DELETE_TODO":
      const newState = [...state];
      const id = newState.findIndex(el => el.id === action.payload);
      newState.splice(id, 1);
      return [...newState];
    case "MARK_TODO_DONE":
      const freshState = [...state];

      const todo = freshState.find(el => el.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
      return [...freshState];
    default:
      return state;
  }
};
