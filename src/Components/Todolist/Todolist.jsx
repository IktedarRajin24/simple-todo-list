/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Todolist.scss";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Todo from "../Todo/Todo";

const Todolist = ({
  tasks,
  currTask,
  onSetCurrTask,
  onSetAddTask,
  onHandleCompletion,
  onHandleDelete,
}) => {
  return (
    <>
      <table
        id="table"
        className="table table-bordered mx-auto mt-5 border-3 border"
      >
        <thead>
          <tr className="w-100 mb-2">
            <td className="border-0 d-flex justify-content-around align-items-center">
              <h2 className="my-3 text-success">Upcoming tasks</h2>
              <button
                className="border-0 bg-transparent "
                onClick={() => onSetAddTask(true)}
              >
                <PlusCircleIcon fill="grey" height={40} width={40} />
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((todo) => (
            <tr key={todo.id}>
              <td>
                <Todo
                  todo={todo}
                  currTask={currTask}
                  onSetCurrTask={onSetCurrTask}
                  onHandleCompletion={onHandleCompletion}
                  onHandleDelete={onHandleDelete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Todolist;
