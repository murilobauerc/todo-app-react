import React, { useEffect, useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import uuid from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const fetchedData = await res.json();
    setTodos(fetchedData.slice(0, 10));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newArrayOfTodos = [...todos, { title: query, id: uuid.v4() }];
    setTodos(newArrayOfTodos);
  };

  return (
    <div className="App">
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" onChange={event => setQuery(event.target.value)} />
        <button onClick={handleSubmit}> Add </button>
      </form>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
