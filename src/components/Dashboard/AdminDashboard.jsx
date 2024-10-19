import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTasks from "../others/AllTasks";

const AdminDashboard = () => {
  return (
    <>
      <Header />
      <div className="main p-4 bg-zinc-800 overflow-hidden">
       <CreateTask/>
       <AllTasks/>
      </div>
    </>
  );
};

export default AdminDashboard;
