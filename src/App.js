import './App.css';
import {useEffect, useState} from 'react';
import Todo from './components/Todo';

let todoNum = 0;

function App() {
  const [todoList, setTodoList] = useState([]);   // array that will store already created todos
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.newTodo.value);
    let todo = {};
    todo.id = todoNum++;
    todo.desc = newTodo;
    let updatedTodoList = [...todoList, todo];
    setTodoList(updatedTodoList);
  }

  const deleteTodo = (todoId) => {
    // console.log(todoId);
    let updatedTodoList = todoList.filter(todo => todo.id !== todoId);
    setTodoList(updatedTodoList);
  }
  
  useEffect(() => {
    console.log(todoList);
  }, [todoList]);


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input  type="text" 
                name="newTodo"
                value={newTodo}
                onChange={handleChange}>
        </input>
        <input  type="submit" 
                value="New Task">
        </input>
      </form>
      <div id="todos-container">
        {todoList.map((todo, index) => {
          // console.log(index);
          return(
            <div key={index}>
              <Todo   todo={todo} 
                      deleteTodo={deleteTodo}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;


// Hello From Branch "modularize"