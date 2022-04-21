const submitHandler = (e, todoList, setTodoList) => {
    e.preventDefault();
    // console.log(e.target.newTodo.value);
    let newTodo = {};
    const newTodoText = e.target.newTodoInput.value;
    newTodo.id = Math.floor(Math.random() * 1000000000);
    newTodo.text = newTodoText;
    let updatedTodoList = [...todoList, newTodo];
    setTodoList(updatedTodoList);
}

export default submitHandler;

