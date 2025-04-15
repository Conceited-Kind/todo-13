import React from "react";

const Todos = ({ todos, setTodos }) => {
    const handleDelete = (id) => {
        const newArray = todos.filter((todo) => id !== todo.id);
        setTodos(newArray);
    };

    if (todos.length === 0) {
        return <p className="text-gray-500 italic">No todos for today</p>;
    }

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} className="todo-item">
                    <div>
                        <span className="todo-text">{todo.body}</span>
                    </div>
                    <button
                        onClick={() => handleDelete(todo.id)}
                        className="delete-button"
                        aria-label={`Delete ${todo.body}`}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Todos;