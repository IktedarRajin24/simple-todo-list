/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./FormAddTask.scss";
import { XMarkIcon } from "@heroicons/react/24/solid";

const FormAddTask = ({ onSetTasks, onSetAddTask }) => {
  const [task, setTask] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    if (task === "" && name === "" && date === "") return;
    else {
      const newTask = {
        id,
        task,
        name,
        date,
        completed: false,
      };
      onSetTasks((tasks) => [...tasks, newTask]);
      onSetAddTask(false);
    }
  };

  return (
    <div className="position-fixed top-0 pt-5 w-100 h-100 bg-dark-subtle overflow-y-auto h-full w-full">
      <div tabIndex="-1" id="modal" className=" border bg-white mx-auto">
        <div className="d-flex justify-content-between align-items-center bg-success px-3 py-2">
          <h5 className="font-bold text-xl text-white">Add Task</h5>
          <button
            className="border-0 bg-transparent "
            onClick={() => onSetAddTask(false)}
          >
            <XMarkIcon height={30} fill="white" />
          </button>
        </div>
        <div>
          <form
            className="bg-orange-50 w-100 mt-10 px-3 py-3 flex flex-col"
            onSubmit={handleSubmit}
          >
            <div className="d-flex flex-column  justify-content-between align-items-start mb-4">
              <label>Date:</label>
              <input
                type="date"
                className="w-100 py-2"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="d-flex flex-column justify-content-between align-items-start mb-4">
              <label>Task Name:</label>
              <input
                type="text"
                className="w-100 py-2"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <div className="d-flex flex-column justify-content-between align-items-start mb-4">
              <label>Task By:</label>
              <input
                type="text"
                className="w-100 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="d-flex gap-2 justify-content-end ">
              <button
                onClick={() => onSetAddTask(false)}
                className="btn bg-white text-success border-success  px-3 py-2"
              >
                Close
              </button>
              <input
                type="submit"
                value="Save"
                className="btn bg-success  text-white px-3 py-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAddTask;
