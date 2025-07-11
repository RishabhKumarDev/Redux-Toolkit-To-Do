import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice"; // this is why we exported the reducer functions cuz we need to individually use then
import { useState } from "react";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch(); // this is a method made by joint venture of react and redux,
  // what it does is it sends the data to the reducer--- data recieved from user(normally);

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input)); // using the reducer function inside the dispatch method we imported // this will send the reducer fun() and data to the reducer.
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="space-x-3 mt-12 flex justify-center"
    >
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
