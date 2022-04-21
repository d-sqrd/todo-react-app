import {useState} from 'react';

function Todo({todo, deleteTodo}) {
    const [todoText, setTodoText] = useState(todo.text);
    const [edit, setEdit] = useState(false);
    const [editInput, setEditInput] = useState('');

    const handleEdit = (e) => {
        setEditInput(e.target.value);
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        let edittedTodo = e.target.edittedTodoInput.value;
        console.log(edittedTodo);
        setTodoText(edittedTodo);
        setEdit(!edit);
        setEditInput('');
    }

    return(
      <div>
        <h1>{todoText}</h1>
        <button onClick={() => setEdit(!edit)}>Update</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        {
            edit ? 
                <div>
                  <form onSubmit={handleEditSubmit}>
                    <input  type="text"
                            name="edittedTodoInput" 
                            value={editInput} 
                            onChange={handleEdit}>
                    </input>
                    <input  type="submit" 
                            value="Update Todo">
                    </input>
                  </form>
                </div> :
                ""
        }
      </div>
    );
  }


  export default Todo;