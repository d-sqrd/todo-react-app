import './App.css';
import {useEffect, useState} from 'react';
import Todo from './components/Todo';
import Form from './components/Form';

function App() {
  const [todoList, setTodoList] = useState([]);   // array that will store already created todos
  
  // useEffect(() => {
  //   console.log(todoList);
  // }, [todoList]);

  return (
    <div className="App">
      <Form   todoList={todoList}
              setTodoList={setTodoList}/>
      <div id="todos-container">
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
  );
}

export default App;


// Hello From Branch "modularize"