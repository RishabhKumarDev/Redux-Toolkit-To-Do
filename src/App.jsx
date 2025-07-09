import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className=" bg-red-500">React Redux Toolkit Tutorial (Todo) </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
