import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-screen bg-zinc-800 flex justify-between p-2 items-center px-4 border-b-2">
        <div className="text-white text-2xl ">
          <h1>
            Hello <br />
            <span className="text-3xl font-semibold">Sakshi 👋</span>
          </h1>
        </div>
        <div>
          <button className="bg-red-400 p-2 rounded-md text-white font-semibold">
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
