import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const formHandler = (e) => {
        e.preventDefault();
        console.log("submitted")

    }
  return (
    <>
      <div className="w-screen h-screen bg-zinc-800 flex justify-center items-center p-2">
        <form
          onSubmit={(e) => {
            formHandler(e);
          }}
          action=""
          className="w-full max-w-xs h-auto flex flex-col justify-center items-center gap-5 rounded-xl border border-red-500 p-5"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your Email"
            className="w-full p-2 rounded-md bg-transparent border border-red-500 placeholder:text-gray-500 text-white outline-none"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="w-full p-2 rounded-md bg-transparent border border-red-500 placeholder:text-gray-500 text-white outline-none"
          />
          <button
            type="submit"
            className="w-full mt-5 bg-red-400 p-3 rounded-md text-white"
          >
            Log In
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
