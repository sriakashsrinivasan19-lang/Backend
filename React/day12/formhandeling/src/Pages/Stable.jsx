import React, { useState } from 'react'

const Stable = () => {
   const [taskList, setTaskList] = useState([])

    const [taskName, setTaskName] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [taskStatus, setTaskStatus] = useState("Pending")

    const [editTaskId, setEditTaskId] = useState(null)


    // Add Task
    const handleAdd = () => {

        const newTask = {
            id: crypto.randomUUID(),
            name: taskName,
            date: taskDate,
            status: taskStatus
        }

        setTaskList([...taskList, newTask])

        setTaskName("")
        setTaskDate("")
        setTaskStatus("Pending")
    }


    // Edit Task
    const handleEdit = (selectedTask) => {

        setTaskName(selectedTask.name)
        setTaskDate(selectedTask.date)
        setTaskStatus(selectedTask.status)

        setEditTaskId(selectedTask.id)
    }


    // Update Task
    const handleUpdate = () => {

        setTaskList(
            taskList.map((task) =>
                task.id === editTaskId
                    ? {
                        ...task,
                        name: taskName,
                        date: taskDate,
                        status: taskStatus
                    }
                    : task
            )
        )

        handleCancel()
    }


    // Delete Task
    const handleDelete = (deleteId) => {

        setTaskList(
            taskList.filter((task) => task.id !== deleteId)
        )

        if (editTaskId === deleteId) {
            handleCancel()
        }
    }


    // Cancel Edit
    const handleCancel = () => {

        setTaskName("")
        setTaskDate("")
        setTaskStatus("Pending")

        setEditTaskId(null)
    }


    return (
        <>

            <h2>Stable Task Manager</h2>

            <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />

            <br /><br />

            <input
                type="date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
            />

            <br /><br />

            <select
                value={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value)}
            >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>

            <br /><br />

            {editTaskId === null ? (

                <button onClick={handleAdd}>
                    Add Task
                </button>

            ) : (

                <>
                    <button onClick={handleUpdate}>
                        Update Task
                    </button>

                    <button onClick={handleCancel}>
                        Cancel
                    </button>
                </>

            )}

            <hr />

            <h2>Task List</h2>

            {taskList.map((task) => (

                <div key={task.id}>

                    <h3>{task.name}</h3>
                    <p>Date: {task.date}</p>
                    <p>Status: {task.status}</p>

                    <button onClick={() => handleEdit(task)}>
                        Edit
                    </button>

                    <button onClick={() => handleDelete(task.id)}>
                        Delete
                    </button>

                    <hr />

                </div>

            ))}

        </>
    )
}

export default Stable