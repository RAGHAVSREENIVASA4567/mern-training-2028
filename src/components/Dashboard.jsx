import StatCard from "./StatCard";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";
import { useState } from "react";

function Dashboard() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Learn React",
            description: "Understanding components",
            status: "Completed"
        },
        {
            id: 2,
            title: "Learn JavaScript",
            description: "Understanding variables and functions",
            status: "Pending"
        },
        {
            id: 3,
            title: "Learn Python",
            description: "Understanding commands",
            status: "Completed"
        }
    ]);

    function toggleTask(id) {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        status:
                            task.status === "Completed"
                                ? "Pending"
                                : "Completed"
                    };
                }

                return task;
            })
        );
    }

    function addTask(newTask) {
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                ...newTask,
                id: Date.now()
            }
        ]);
    }
    function deleteTask(id) {
    setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== id)
    );
}


    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(
        (task) => task.status === "Completed"
    ).length;
    const pendingTasks = tasks.filter(
        (task) => task.status === "Pending"
    ).length;

    return (
        <main>
            <div className="stats-container">
                <StatCard title="Total Tasks" value={totalTasks} />
                <StatCard title="Completed" value={completedTasks} />
                <StatCard title="Pending" value={pendingTasks} />
            </div>

            <AddTask onAddTask={addTask} />

            <h2>Recent Tasks</h2>

            <div className="tasks-container">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        title={task.title}
                        description={task.description}
                        status={task.status}
                        onToggle={() => toggleTask(task.id)}
                        onDelete={() => deleteTask(task.id)}
                    />
                ))}
            </div>
        </main>
    );
}


export default Dashboard;
