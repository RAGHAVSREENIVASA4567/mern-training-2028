import { useState } from "react";

function AddTask(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const task = {
            title: title,
            description: description,
            status: "Pending"
        };

        console.log("New Task:", task);

        // Send task to Dashboard
        props.onAddTask(task);

        // Clear inputs
        setTitle("");
        setDescription("");
    }

    return (
        <div>
            <h2>Add Task</h2>

            <form onSubmit={handleSubmit}>
                <label>Add Title</label>

                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <h2>Add Description</h2>

                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <p>Current Title: {title}</p>
                <p>Current Description: {description}</p>

                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default AddTask;
