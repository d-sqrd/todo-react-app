const handleDeleteTodo = (todoId, todoList, setTodoList) => {
    let updatedTodoList = todoList.filter(todo => todo.id !== todoId);
    setTodoList(updatedTodoList);
}

export default handleDeleteTodo;