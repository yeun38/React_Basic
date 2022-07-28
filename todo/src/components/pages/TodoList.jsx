import React, { useRef, useState } from "react";
import { Form } from "../form/Form";
import { List } from "../list/List";

function TodoList() {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    isDone: false,
  });

  const { title, content } = inputs; // 구조 분해 할당
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  console.log(title);

  const [users, setUsers] = useState([
    {
      id: 1,
      title: "저녁",
      content: "6시에 저녁먹어야해",
      isDone: false,
    },
    {
      id: 2,
      title: "cs스터디",
      content: "9시에 cs스터디 발표 준비해야해",
      isDone: true,
    },
  ]);

  const nextId = useRef(3);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      title,
      content,
      isDone: false,
    };
    setUsers(users.concat(user));
    // setUsers([...users, user]);
    setInputs({
      title: "",
      content: "",
      isDone: false,
    }); // 클릭 이벤트가 일어나면서 초기화 이전에 바뀐 setinputs 내용이 들어있기때문.
    nextId.current += 1;
  };

  return (
    <div>
      <Form
        title={title}
        content={content}
        onChange={onChange}
        onCreate={onCreate}
      ></Form>
      <List users={users} setUsers={setUsers}></List>
    </div>
  );
}

export { TodoList };
