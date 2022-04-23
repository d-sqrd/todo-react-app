const editSubmitHandler = (e, setTodoText, setEditInput, edit, setEdit) => {
    e.preventDefault();
    const ediittedTodoText = e.target.edittedInput.value;
    if(ediittedTodoText) {
        setTodoText(ediittedTodoText);
        setEditInput('');
    }
    setEdit(!edit)
}

export default editSubmitHandler;