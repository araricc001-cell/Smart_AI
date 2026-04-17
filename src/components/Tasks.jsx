import React, { useState } from "react";
import "./task.css";

const Tasks = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);

  // 1st delete method
  // const removeTask = (index) => {
  //   const newTasks = [...tasks];
  //   newTasks.splice(index, 1);
  //   setTasks(newTasks);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      // another delete method
      id: generateRandomNumber(tasks.map((task) => task.id)),
      name,
      desc,
      date,
    };

    setTasks((prevTask) => [...prevTask, newTask]);
    setName("");
    setDesc("");
    setDate("");
  };
  console.log(tasks);

  const generateRandomNumber = (currentIds) => {
    let random;

    do {
      random = Math.floor(Math.random() * 50 + 1);
    } while (currentIds.includes(random));
    return random;
  };

  const handleDelete = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Task manager</h1>
        {/* name */}
        <input
          type="text"
          placeholder="Enter the name of the task"
          name="name"
          required
          className="input-style"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        {/* description */}
        <textarea
          type="text"
          placeholder="Enter the description"
          name="desc"
          rows={5}
          required
          className="input-style1"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />

        {/* due date */}
        <input
          type="date"
          placeholder="Enter the date"
          name="date"
          required
          className="input-style"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />

        <button type="submit">Submit</button>
      </form>

      <div className="tasks-container">
        <h1 style={{ textAlign: "center" }}>
          To Do {new Date().toLocaleDateString()}
        </h1>
        {/* displaying the tasks */}
        <div>
          {tasks.map((tasks, idx) => (
            <div key={idx}>
              <ul className="list">
                <li>Name: {tasks.name}</li>
                <li>Description: {tasks.desc}</li>
                <li>Date: {tasks.date}</li>
              </ul>
              <button onClick={() => handleDelete(tasks.id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;