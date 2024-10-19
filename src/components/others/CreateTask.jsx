import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <form className="flex gap-20 p-2">
        <div className="left flex-1 w-1/2 p-2">
          <h1 className="text-xl mt-2">Task title</h1>
          <input
            type="text"
            placeholder="enter title"
            className="outline w-full p-2 rounded-md mt-3 text-black"
          />
          <h1 className="text-xl mt-2">Date</h1>
          <input
            type="date"
            className="outline w-full p-2 rounded-md mt-3 text-black"
          />
          <h1 className="text-xl mt-2">Assign to</h1>
          <input
            type="text"
            placeholder="Employee name"
            className="outline w-full p-2 rounded-md mt-3 text-black"
          />
          <h1 className="text-xl mt-2">Category</h1>
          <input
            type="text"
            placeholder="design,dev,etc"
            className="outline w-full p-2 rounded-md mt-3 text-black"
          />
        </div>
        <div className="right flex-1 p-2">
          <div className="top">
            <h1 className="text-xl">Description</h1>
            <textarea
              className="outline mt-4 rounded p-2 text-black"
              placeholder="Enter description"
              rows={10}
              cols={90}
            ></textarea>
          </div>
          <div className="bottom">
            <button
              type="submit"
              className="w-full bg-green-400 p-3 mt-2 rounded-md text-xl"
            >
              Create task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTask