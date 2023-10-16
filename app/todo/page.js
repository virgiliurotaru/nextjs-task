"use client";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Task from "./task";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  const deleteTaskHandler = (id) => {
    setTodoList((prevList) => {
      const updatedList = prevList.filter((item) => item.id !== id);
      return updatedList;
    });
  };

  const addTodoHandler = () => {
    if (todo === "") {
      return;
    }
    const id = nanoid();
    const todoObj = {
      id,
      todo,
    };
    const newList = [...todoList, todoObj];
    setTodo("");
    setTodoList(newList);
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <h1 className="text-4xl text-center">TODOs PAGE</h1>

      <input
        className="input input-bordered mr-5"
        id="todo-input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodoHandler} className="btn">
        Add task
      </button>
      <div className="mt-10">
        {!todoList.length && <p>No tasks to show</p>}
        {todoList.map((item) => {
          return (
            <Task
              key={item.id}
              taskTitle={item.todo}
              deleteItem={() => deleteTaskHandler(item.id)}
            ></Task>
          );
        })}
      </div>
    </>
  );
}
