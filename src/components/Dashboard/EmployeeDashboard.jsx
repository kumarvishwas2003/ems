import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaksList from "../TaskList/TaksList";

const EmployeeDashboard = () => {
  return (
    <>
      <div className="w-screen h-screen bg-zinc-800">
        <Header />
        <TaskListNumbers />
        <TaksList />
      </div>
    </>
  );
};

export default EmployeeDashboard;
