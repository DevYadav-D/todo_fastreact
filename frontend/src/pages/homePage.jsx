import React from "react";
import TodoList from "../components/todo/toDoList";
import CreateTodo from "../components/todo/createToDo";

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <CreateTodo />
            <TodoList />
        </div>
    );
}

export default HomePage;
