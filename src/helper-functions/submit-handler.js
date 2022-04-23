const submitHandler = (e, todoList, setTodoList, setNewTodo) => {
    e.preventDefault();
    let newTodo = {};
    const newTodoText = e.target.newTodoInput.value;
    if(newTodoText) {
        newTodo.id = Math.floor(Math.random() * 1000000000);
        newTodo.text = newTodoText;
        let updatedTodoList = [...todoList, newTodo];
        setTodoList(updatedTodoList);
        setNewTodo('');
    }
}

export default submitHandler;


