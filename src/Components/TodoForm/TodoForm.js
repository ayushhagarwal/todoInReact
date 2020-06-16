import React from 'react'
import classes from  './TodoForm.module.css'
const TodoForm=(props)=>{
    // let todos=(
    //     props.todos.map(todo=>{
    //         return(
    //             <div>
    //                 <ul key={todo.id}>
    //                     <li>{todo.task}<span className={classes.delete}>Delete</span></li>
    //                 </ul>
    //             </div>
    //         )
    //     })
    // )
    return(
        <div className={classes.Form}>
            <form onSubmit={props.submit}>
                <input id="input1" type="text" placeholder="Add a new todo" onChange={props.change}/>
                <button onClick={props.click}>Add</button>
                {/* {todos} */}
            </form>
        </div>
    )
};
export default TodoForm;