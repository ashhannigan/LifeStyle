import React from "react";
import { useNavigate } from "react-router-dom";

function LogIn() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/Home");
    }

  return (
    <>
      <h1> LogIn </h1>
        <label class="email">Email<input type="email"/> </label>
        <label class="password">Password<input type="password"/></label>
        <div>
        Click Here to sign in
        <label>
          <input type="radio" onChange={handleLogin} />
          Login
        </label>
      </div>
    </>
  );
}

export default LogIn;
