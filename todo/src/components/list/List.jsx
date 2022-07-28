import React from "react";
import "./style.css";
import Todo from "../todo/Todo";

function List({ users, setUsers }) {
  console.log(users[0]);

  const onRemove = (id) => {
    console.log(id);
    setUsers(
      users.filter((user) => {
        return user.id !== id;
      })
    );
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, isDone: !user.isDone } : user
      )
    );
    console.log(users);
  };
  return (
    <div className="list-container">
      <h2 className="list-title">Working..🔥 </h2>
      <div className="list-wrapper">
        {users.map((user) =>
          user.isDone === false ? (
            <Todo user={user} onRemove={onRemove} onToggle={onToggle} />
          ) : (
            " "
          )
        )}
      </div>
      <h2 className="list-title">Done..!!!!!! </h2>
      <div className="list-wrapper">
        {users.map((user) =>
          user.isDone === true ? (
            <Todo user={user} onRemove={onRemove} onToggle={onToggle} />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export { List };
