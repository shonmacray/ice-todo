import React from "react";
import { useDispatch } from "react-redux";
import { setAppState } from "../../redux/actions";

export default function SortField() {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Filter Todos</h3>
      <h5 onClick={() => dispatch(setAppState("SORT_FINISHED"))}>
        By Finished
      </h5>
      <h5 onClick={() => dispatch(setAppState("NORMAL"))}>Reset </h5>
    </div>
  );
}
