import { useState } from "react";
import editSubmitHandler from "../helper-functions/edit-submit-handler";

const EditForm = ({setTodoText}) => {
    const [editInput, setEditInput] = useState('');
    function handleEditSubmit(e) {
        editSubmitHandler(e, setTodoText, setEditInput);
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
                        value="Update Todo">
                </input>
            </form>
        </div>
    )
}

export default EditForm;