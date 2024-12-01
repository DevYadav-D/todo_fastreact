import React, { useState } from "react";
import { createNewTodo } from "../../services/todo/todoService";

function CreateTodo() {
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleCreate = async () => {
        try {
            await createNewTodo({ description });
            setSuccess("To-Do created successfully");
            setDescription("");
        } catch (error) {
            setError("Error creating To-Do");
        }
    };

    return (
        <div>
            <h2>Create New To-Do</h2>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
            />
            <button onClick={handleCreate}>Create</button>
            {error && <div>{error}</div>}
            {success && <div>{success}</div>}
        </div>
    );
}

export default CreateTodo;
