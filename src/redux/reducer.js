const todoState = [
  {
    id: 1,
    todo:
      "I create new repos on github, tweeps, blogs everyday. I am passionate about tech."
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
    default:
      return state;
  }
};
