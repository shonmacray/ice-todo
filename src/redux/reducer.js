const initialState = {
  appname: "ice-todo"
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TESTING":
      return state;
    default:
      return state;
  }
};
