import React from "react";

const TaskListNumbers = () => {
  return (
    <>
      <div className="flex w-screen gap-4 p-2 mt-4">
        <div className="bg-red-400 h-[180px] w-[45%] text-white rounded-md p-2">
          <h1>0</h1>
          <br />
          <h1>New Tasks</h1>
        </div>

        <div className="bg-green-400 h-auto w-[45%] text-white rounded-md p-2">
          <h1>0</h1>
          <br />
          <h1>New Tasks</h1>
        </div>

        <div className="bg-yellow-400 h-auto w-[45%] text-white rounded-md p-2">
          <h1>0</h1>
          <br />
          <h1>New Tasks</h1>
        </div>

        <div className="bg-blue-400 h-auto w-[45%] text-white rounded-md p-2">
          <h1>0</h1>
          <br />
          <h1>New Tasks</h1>
        </div>
      </div>
    </>
  );
};

export default TaskListNumbers;
