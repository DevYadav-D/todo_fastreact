import React from "react";
import { useParams } from "react-router-dom";
import GetToDo from "../components/GetToDo";
import UpdateTodo from "../components/UpdateTodo";
import DeleteTodo from "../components/DeleteTodo";

function TodoPage() {
    const { todoId } = useParams();

    return (
        <div>
            <GetToDo />
            <UpdateTodo todoId={todoId} />
            <DeleteTodo todoId={todoId} />
        </div>
    );
}

export default TodoPage;
