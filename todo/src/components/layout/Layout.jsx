import React from "react";
import { Header } from "../header/Header";
import "./style.css";
import { TodoList } from "../pages/TodoList";

function Layout() {
  return (
    <div className="Layout">
      <Header></Header>
      <TodoList></TodoList>
    </div>
  );
}

export { Layout };
