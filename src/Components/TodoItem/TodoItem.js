import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  let todos = props.todos.map((todo,index) => {
    return (
      <div key={todo.id}>
        <ul>
          <li>
            {todo.task}
            <span className={classes.delete}>
              <button onClick={props.click}>Delete</button>
            </span>
          </li>
        </ul>
      </div>
    );
  });
  return <div>{todos}</div>;
};
export default TodoItem;
