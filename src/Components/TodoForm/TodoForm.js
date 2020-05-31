import React from 'react'
import './TodoForm.css'
const TodoForm=(props)=>{
    let todos=(
        props.todos.map(todo=>{
            return(
                <div>
                    <ul key={todo.id}>
                        <li>{todo.task}</li>
                    </ul>
                </div>
            )
        })
    )
    return(
        <div className="Form">
            <form onSubmit={props.submit}>
                <input id="input1" type="text" placeholder="Add a new todo" onChange={props.change}/>
                {/* <label for="input1">Name</label> */}
                <button onClick={props.click}>Add</button>
                {todos}
            </form>
        </div>
    )
};
export default TodoForm;