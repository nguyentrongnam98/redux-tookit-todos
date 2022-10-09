import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getTodos, markCompleted, todosSelector } from "../store/reducers/todoSlice";
import TodoForm from "./TodoForm";
export default function Todo() {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();
  const handleCheckedTodo = (e, todoId) => {
    dispatch(markCompleted(todoId));
  };
  const handleDeleteSingleTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };
  useEffect(() => {
    dispatch(getTodos())
  },[])
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
            {todo.title}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => handleCheckedTodo(e, todo.id)}
            />
            <button onClick={() => handleDeleteSingleTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
