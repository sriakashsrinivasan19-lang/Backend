import React, { useState } from 'react'

const FormValidation = () => {
 const [taskList, setTaskList] = useState([])

    const [taskName, setTaskName] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [taskStatus, setTaskStatus] = useState("Pending")

    const [errorMessage, setErrorMessage] = useState("")

    const [editIndex, setEditIndex] = useState(null)


    // Add / Update Task
    const handleSubmit = () => {

        if (
            taskName.trim() === "" ||
            taskDate === "" ||
            taskStatus === ""
        ) {
            setErrorMessage("Please fill all fields")
            return
        }

        setErrorMessage("")

        const taskDetails = {
            name: taskName.trim(),
            date: taskDate,
            status: taskStatus
        }

        if (editIndex !== null) {

            setTaskList(
                taskList.map((task, index) =>
                    index === editIndex ? taskDetails : task
                )
            )

            setEditIndex(null)

        } else {

            setTaskList([...taskList, taskDetails])

        }

        setTaskName("")
        setTaskDate("")
        setTaskStatus("Pending")
    }


    // Edit Task
    const handleEdit = (index) => {

        setTaskName(taskList[index].name)
        setTaskDate(taskList[index].date)
        setTaskStatus(taskList[index].status)

        setEditIndex(index)
        setErrorMessage("")
    }


    // Delete Task
    const handleDelete = (index) => {

        setTaskList(
            taskList.filter((task, i) => i !== index)
        )

        if (editIndex === index) {
            handleCancel()
        } else if (editIndex !== null && index < editIndex) {
            setEditIndex(editIndex - 1)
        }
    }


    // Cancel Edit
    const handleCancel = () => {

        setTaskName("")
        setTaskDate("")
        setTaskStatus("Pending")

        setEditIndex(null)
        setErrorMessage("")
    }


    return (
        <>

            <h2>Task Validation</h2>

            <input
                type="text"
                placeholder="Enter Task Name"
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

            {errorMessage && <p>{errorMessage}</p>}

            <button onClick={handleSubmit}>
                {editIndex !== null ? "Update Task" : "Add Task"}
            </button>

            {editIndex !== null && (
                <button onClick={handleCancel}>
                    Cancel
                </button>
            )}

            <hr />

            <h2>Task List</h2>

            {taskList.map((task, index) => (
                <div key={index}>

                    <h3>{task.name}</h3>
                    <p>Date: {task.date}</p>
                    <p>Status: {task.status}</p>

                    <button onClick={() => handleEdit(index)}>
                        Edit
                    </button>

                    <button onClick={() => handleDelete(index)}>
                        Delete
                    </button>

                    <hr />

                </div>
            ))}

        </>
    )
}

export default FormValidation