import React,{Component} from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import Navbar from './Components/Navbar/Navbar';
import TodoForm from './Components/TodoForm/TodoForm';
class App extends Component{
  state={
    todos:[],
    items:{task:'',id:null},
    upadted:false
  }
  inputHandler=(e)=>{
    this.setState({
      items:{
        task:e.target.value,
        id:uuidv4()
      }
    })
  }
  submitHandler=(e)=>{
    e.preventDefault();
    e.target.reset();
  }
  addHandler=(e)=>{
    const newitems=this.state.items;
    if(newitems!=null)
    {
      const todos1=[...this.state.todos,newitems];
      this.setState({
        todos:todos1,
        updated:true,
        items:{
          task:'',
          id:''
        }
      })
    }
  }
  render(){
    return (
      <div className="App">
        <Navbar/>
        <TodoForm submit={this.submitHandler}  change={this.inputHandler} click={this.addHandler} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
