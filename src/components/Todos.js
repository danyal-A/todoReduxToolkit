import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../feactures/todo/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <div className="flex">
          <div key={todo.id}>{todo.text}</div>
          <button
            className="bg-red-500 text-white"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            delete
          </button>
        </div>
      ))} 
    </>
  );
};

export default Todos;
