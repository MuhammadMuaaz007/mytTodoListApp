import React from "react";
import { useState } from "react";

export default function Items() {
  const onDelete = (todo) => {
    console.log("Delete Function");
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish this react video",
      desc: "You need to finish this react video for mern stack course",
    },
    {
      id: 2,
      title: "Go to market",
      desc: "You need to go to market to buy some biscuits",
    },
  ]);

  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List -:-</h3>
      {todos.map((todo) => {
        return (
          <div className="container my-3">
            <h3>{todo.id + "." + todo.title}</h3>
            <p>{todo.desc}</p>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => {
                onDelete(todo);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
