import React, { useState } from "react";
import { deleteTodo } from "../../services/todo/todoService";

function DeleteTodo({ todoId }) {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleDelete = async () => {
        try {
            await deleteTodo(todoId);
            setSuccess("To-Do deleted successfully");
        } catch (error) {
            setError("Error deleting To-Do");
        }
    };

    return (
        <div>
            <h2>Delete To-Do</h2>
            <button onClick={handleDelete}>Delete</button>
            {error && <div>{error}</div>}
            {success && <div>{success}</div>}
        </div>
    );
}

export default DeleteTodo;
