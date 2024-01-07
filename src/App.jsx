/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
// import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Todolist from "./Components/Todolist/Todolist";
import FormAddTask from "./Components/FormAddTask/FormAddTask";
const todoList = [
  {
    id: 1,
    task: "Buy groceries",
    completed: false,
    date: "2024-01-06",
    name: "John Doe",
  },
  {
    id: 2,
    task: "Finish report",
    completed: false,
    date: "2024-01-07",
    name: "Jane Smith",
  },
  {
    id: 3,
    task: "Call mom",
    completed: true,
    date: "2024-01-05",
    name: "Alex Johnson",
  },
];

function App() {
  const [tasks, setTasks] = useState(todoList);
  const [addTask, setAddTask] = useState(false);
  const [currTask, setCurrTask] = useState(null);

  const handleSetCurrTask = (task) => {
    setCurrTask((curr) => (curr?.id === task.id ? null : task));
  };
  const handleCompletion = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const handleDelete = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id != id));
  };
  return (
    <>
      <Todolist
        tasks={tasks}
        onSetTasks={setAddTask}
        addTask={addTask}
        onSetAddTask={setAddTask}
        currTask={currTask}
        onSetCurrTask={handleSetCurrTask}
        onHandleCompletion={handleCompletion}
        onHandleDelete={handleDelete}
      />
      {addTask && (
        <FormAddTask onSetTasks={setTasks} onSetAddTask={setAddTask} />
      )}
    </>
  );
}

export default App;
