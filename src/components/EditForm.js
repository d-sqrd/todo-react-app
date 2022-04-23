import { useState } from "react";
import editSubmitHandler from "../helper-functions/edit-submit-handler";

const EditForm = ({setTodoText, edit, setEdit}) => {
    const [editInput, setEditInput] = useState('');
    function handleEditSubmit(e) {
        editSubmitHandler(e, setTodoText, setEditInput, edit, setEdit);
    }
    return(
        <div>
            <form onSubmit={handleEditSubmit}>
                <input  type="text"
                        name="edittedInput"
                        value={editInput}
                        onChange={e => setEditInput(e.target.value)}>        
                </input>
                <input  type="submit"
                        value="Update Todo"
                        className="btn">
                </input>
            </form>
        </div>
    )
}

export default EditForm;