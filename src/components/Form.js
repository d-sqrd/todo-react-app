import { useState } from "react";
import submitHandler from '../helper-functions/submit-handler';

const Form = ({todoList, setTodoList}) => {
    const [newTodo, setNewTodo] = useState('');
    const handleSubmit = (e) => {
        submitHandler(e, todoList, setTodoList, setNewTodo);
    }
    return(
        <div>
            <form   onSubmit={handleSubmit}>
                <input  type="text"
                        name="newTodoInput"
                        value={newTodo}
                        placeholder="Enter a new todo..."
                        onChange={e => setNewTodo(e.target.value)}></input>
                        <br />
                        <br />
                <input  type="submit"
                        value="New Todo"
                        className="btn">
                </input>
            </form>
        </div>
    )
}


export default Form;