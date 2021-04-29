import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
	//Holding updated value, not empty string//
	const [input, setInput] = useState(props.edit ? props.edit.value : "");

	const inputRef = useRef(null);

	//Focusing on input field while entering //
	useEffect(() => {
		inputRef.current.focus();
	});

	const handleChange = (e) => {
		setInput(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});

		setInput("");
	};
	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			{props.edit ? (
				<>
					<input
						type="text"
						placeholder="Update item"
						value={input}
						name="text"
						className="todo-input edit"
						onChange={handleChange}
						ref={inputRef}
					/>
					<button className="todo-button edit">Update</button>{" "}
				</>
			) : (
				<>
					<input
						type="text"
						placeholder="Time to type boss"
						value={input}
						name="text"
						className="todo-input"
						onChange={handleChange}
						ref={inputRef}
					/>
					<button className="todo-button">Add Task</button>
				</>
			)}
		</form>
	);
}

export default TodoForm;
