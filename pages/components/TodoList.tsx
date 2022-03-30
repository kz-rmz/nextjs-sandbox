import ItemsList from "./ItemsList";
import AddItem from "./AddItem";
import { useState, isValidElement } from "react";

const TodoList = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Task #1",
      body: "Task #1 detailed description",
      isDone: true,
    },
    {
      id: 2,
      title: "Task #2",
      body: "Task #2 detailed description",
      isDone: true,
    },
    {
      id: 3,
      title: "Task #3",
      body: "Task #3 detailed description",
      isDone: true,
    },
  ]);
  const user = data.map((element) => (
    <ItemsList key={element.id} listItem={element} />
  ));
  return (
    <>
      <AddItem />
      <div className="todo">
        <div className="todo__title">
          <h2 className="todo__title__h2">Список задач: </h2>
        </div>
        <div className="todo__list">{user}</div>

        {/* Styles */}
        <style jsx>{`
          .todo {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
          }
          .todo__title__h2 {
            text-transform: uppercase;
            font-weight: 500;
          }
        `}</style>
      </div>
    </>
  );
};

export default TodoList;
