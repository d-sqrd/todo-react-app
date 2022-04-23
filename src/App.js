import './App.css';
import { useState } from 'react';
import Todo from './components/Todo';
import Form from './components/Form';

function App() {
  const [todoList, setTodoList] = useState([]);   // array that will store already created todos
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <div className='main-container'>
        <Form   todoList={todoList}
                setTodoList={setTodoList}/>
        <div className="todos-container">
          {todoList.map((todo, index) => {
            return(
              <div key={index}>
                <Todo   todo={todo} 
                        todoList={todoList}
                        setTodoList={setTodoList}
                />
              </div>
            )})}
        </div>
      </div>
    </div>
  );
}

export default App;


// Hello From Branch "modularize"