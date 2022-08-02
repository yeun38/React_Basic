import React from "react";
// import Router from "./shared/Router";
import { useNavigate } from "react-router-dom";

// src/App.js

const App = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/works");
      }}
    >
      works로 이동
    </button>
  );
};

export default App;
