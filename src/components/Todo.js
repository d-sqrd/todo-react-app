import {useState} from 'react';
import handleDeleteTodo from '../helper-functions/delete-todo-handler';
import EditForm from './EditForm';

function Todo({todo, todoList, setTodoList}) {
    const [todoText, setTodoText] = useState(todo.text);
    const [edit, setEdit] = useState(false);
    
    const deleteTodo = (todoId) => {
      handleDeleteTodo(todoId, todoList, setTodoList);
    }

    return(
      <div>
        <h1>{todoText}</h1>
        <button onClick={() => setEdit(!edit)}>Update</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        { edit ?  <EditForm   setTodoText={setTodoText}/> : "" }
      </div>
    );
  }


  export default Todo;