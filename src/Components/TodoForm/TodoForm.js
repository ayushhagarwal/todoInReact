import React from 'react'

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
                <input type="text" placeholder="Add todo" onChange={props.change}/>
                <button onClick={props.click}>Add</button>
                {todos}
            </form>
        </div>
    )
};
export default TodoForm;