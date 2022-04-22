const editSubmitHandler = (e, setTodo, setEditInput) => {
    e.preventDefault();
    const ediittedTodoText = e.target.edittedInput.value;
    setTodo(ediittedTodoText);
    setEditInput('');
}

export default editSubmitHandler;