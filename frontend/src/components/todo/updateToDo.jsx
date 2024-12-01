import React, { useState } from "react";
import { updateTodo } from "../../services/todo/todoService";

function UpdateTodo({ todoId }) {
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleUpdate = async () => {
        try {
            await updateTodo(todoId, { description });
            setSuccess("To-Do updated successfully");
            setDescription("");
        } catch (error) {
            setError("Error updating To-Do");
        }
    };

    return (
        <div>
            <h2>Update To-Do</h2>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Update description"
            />
            <button onClick={handleUpdate}>Update</button>
            {error && <div>{error}</div>}
            {success && <div>{success}</div>}
        </div>
    );
}

export default UpdateTodo;
