import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Clock from "./components/Clock";

function App() {
	return (
		<div className="todo-app">
			<Clock className="clock" />
			<TodoList />
		</div>
	);
}

export default App;
