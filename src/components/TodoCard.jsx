import { useState } from "react";
import { FaClipboardCheck } from "react-icons/fa6";

const TodoCard = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodos = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    }
    setInput("");
  };

  return (
    <div className="bg-white shadow-lg rounded-3xl p-16 hover:shadow-[0_5px_100px_var(--color-blue-300)] ">
      <h1 className="flex items-center justify-center gap-3 text-3xl font-bold text-gray-900 mb-6">
        ToDO List <FaClipboardCheck />
      </h1>

      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Add a new ToDo..."
          className="grow px-3 py-2 border rounded-l-lg 
        focus:outline-none focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-600"
          onClick={addTodos}
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex gap-2 items-center p-3 rounded-lg bg-slate-200 border border-gray-200"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                setTodos(
                  todos.map((t) =>
                    t.id === todo.id ? { ...t, completed: !t.completed } : t
                  )
                )
              }
              className="mr-2 h-5 w-5 text-blue-500"
            />
            <span
              className={`grow ${
                todo.completed ? "line-through text-gray-500" : "text-gray-800"
              } `}
            >
              {todo.text}
            </span>
            <button
              className="p-1.5 bg-red-400 rounded-lg hover:bg-red-600"
              onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoCard;
