import React from "react";
import { useSelector } from "react-redux";

export default function Todo() {
  const app = useSelector(state => state.appReducer);
  return (
    <div>
      <h3>Hello, {app.appname}</h3>
    </div>
  );
}
