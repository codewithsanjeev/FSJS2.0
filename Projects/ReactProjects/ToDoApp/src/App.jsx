import React, { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [update, setUpdate] = useState("");

  const handleInputData = (event) => {
    setInput(event.target.value);
  };

  const handleListData = () => {
    if (input.trim()) {
      setList([...list, input]);
      setInput("");
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleListData();
  };

  const handleListDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleUpdate = (index) => {};

  return (
    <div className="todo-app flex h-screen flex-col items-center justify-center bg-slate-700 text-white">
      <h1 className="mb-3 text-6xl">To Do List</h1>

      <form
        onSubmit={handleOnSubmit}
        className="form flex w-2/5 justify-center rounded p-3 "
      >
        <input
          type="text"
          autoFocus
          className="form-input mr-3 w-3/5 rounded text-gray-600"
          placeholder="Enter your next item in the list..."
          value={input}
          onChange={handleInputData}
        />
        <button
          type="submit"
          className="w-2/5 rounded bg-orange-400 pl-4 pr-4 pt-2 pb-2 hover:bg-blue-500"
        >
          <AiOutlineFileAdd className="mb-1 inline h-5 w-5" />
          Add Task
        </button>
      </form>

      <div className="taskList w-2/5 rounded p-3">
        {/* Task List */}
        {list.map((listData, index) => (
          <div
            className="task item-center mb-1 flex justify-between gap-5 rounded bg-white p-2 text-gray-700"
            key={index}
          >
            <div className="the-task flex w-4/5 text-xl">
              <div className="check-mark">
                <FaRegCircle className="mb-1 mr-2 inline" />
              </div>
              <div className="task-name">{listData}</div>
            </div>

            <div className="update-delete-section flex w-1/5 justify-between">
              <div className="update-task flex cursor-pointer flex-col items-center justify-center hover:text-cyan-500">
                <AiTwotoneEdit className="h-4 w-4" />
                <div className="text-[8px] uppercase">Update</div>
              </div>

              <div
                onClick={handleListDelete}
                className="delete-task flex cursor-pointer flex-col items-center justify-center hover:text-cyan-500"
              >
                <AiOutlineDelete className="h-4 w-4" />
                <div className="text-[8px] uppercase">Delete</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
