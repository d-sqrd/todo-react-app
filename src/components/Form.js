import { useState } from "react";
import submitHandler from '../helper-functions/submit-handler';

const Form = ({todoList, setTodoList}) => {
    const [newTodo, setNewTodo] = useState('');
    const handleSubmit = (e) => {
        submitHandler(e, todoList, setTodoList);
    }
    return(
        <div>
            <form   onSubmit={handleSubmit}>
                <input  type="text"
                        name="newTodoInput"
                        value={newTodo}
                        onChange={e => setNewTodo(e.target.value)}></input>
                <input  type="submit"
                        value="New Todo">
                </input>
            </form>
        </div>
    )
}


export default Form;