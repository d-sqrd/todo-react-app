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
      <div id="todo">
        <h4>{todoText}</h4>
        <div>
          <button onClick={() => setEdit(!edit)} className="btn">Update</button>
          <button onClick={() => deleteTodo(todo.id)} className="btn">Delete</button>
        { edit ?  <EditForm   setTodoText={setTodoText} edit={edit} setEdit={setEdit}/> : "" }
        </div>
      </div>
    );
  }


  export default Todo;