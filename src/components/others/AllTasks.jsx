import React from 'react'

const AllTasks = () => {
  return (
    <div className="tasks flex flex-col gap-4 p-4 overflow-y-auto h-64">
      <div className="text-xl bg-red-500 p-2 rounded-md">
        <h1>Sarthak</h1>
        <h2>Title</h2>
        <h3>status</h3>
      </div>

      <div className="text-xl bg-blue-500 p-2 rounded-md">
        <h1>Sarthak</h1>
        <h2>Title</h2>
        <h3>status</h3>
      </div>
      <div className="text-xl bg-green-500 p-2 rounded-md">
        <h1>Sarthak</h1>
        <h2>Title</h2>
        <h3>status</h3>
      </div>
      <div className="text-xl bg-yellow-500 p-2 rounded-md">
        <h1>Sarthak</h1>
        <h2>Title</h2>
        <h3>status</h3>
      </div>
    </div>
  );
}

export default AllTasks