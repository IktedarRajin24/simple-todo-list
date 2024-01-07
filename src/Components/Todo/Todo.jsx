/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Todo.scss";
import {
  CheckCircleIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";

const Todo = ({
  todo,
  currTask,
  onSetCurrTask,
  onHandleCompletion,
  onHandleDelete,
}) => {
  const { id, name, task, completed, date } = todo;
  const inputDate = new Date(date);
  const options = { month: "short", day: "2-digit", year: "numeric" };

  const formattedDate = inputDate.toLocaleDateString("en-US", options);
  return (
    <div className="todo d-flex justify-content-between align-items-center  position-relative ">
      <div>
        <p className="taskName mb-1 ">{task}</p>
        <p className="taskDetails text-black-50 mb-1 ">
          {formattedDate} | {name}
        </p>
      </div>
      <div>
        {completed && <CheckCircleIcon height={30} fill="#198754" />}
        <button
          className="border-0 bg-transparent"
          onClick={() => onSetCurrTask(todo)}
        >
          <EllipsisVerticalIcon fill="#198754" height={30} />
          {currTask?.id === id && (
            <div className="bg-white border border-2 rounded-2 py-2 px-2 border-gray options position-absolute">
              <div
                className="border-3 border-bottom"
                onClick={() => onHandleCompletion(id)}
              >
                Mark as {completed ? "undone" : "done"}
              </div>
              <div onClick={() => onHandleDelete(id)}>Delete </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Todo;
