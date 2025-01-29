import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./assets/style.css";
import { useNavigate } from "react-router-dom";

import LogIn from "./pages/logIn.jsx";
import Home from "./pages/home.jsx";

//splash page
function Splash() {
const navigate = useNavigate();
 const handleChange = () => {
  navigate("/LogIn")
 }
  return (
    <>
      <h1 class="h1">Welcome to the Lifestyle App!</h1>
      <label class="splash">
        <input type="radio" onChange={handleChange}/>
        Login
      </label>
      <label class="splash">
        <input type="radio" />
        Sign Up
      </label>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
