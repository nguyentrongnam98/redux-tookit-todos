import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/reducers/todoSlice";
export default function TodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAddSingleTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(title))
    setTitle('')
  };
  return (
    <div>
      <form onSubmit={handleAddSingleTodo}>
        <input type="text" value={title} onChange={changeTitle} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
