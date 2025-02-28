

import { useState } from "react";

export default function TodoCard({ todo, handleDeleteTodo, todoIndex, handleCompleteTodo, handleEditTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newInput, setNewInput] = useState(todo.input);

  const handleSaveEdit = () => {
    handleEditTodo(todoIndex, newInput);
    setIsEditing(false);
  };

  return (
    <div className="card todo-item">
      {isEditing ? (
        <input type="text" value={newInput} onChange={(e) => setNewInput(e.target.value)} />
      ) : (
        <p>{todo.input}</p>
      )}

      <div className="todo-buttons">
        {isEditing ? (
          <button onClick={handleSaveEdit}><h6>Save</h6></button>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}><h6>Edit</h6></button>
            <button onClick={() => handleCompleteTodo(todoIndex)} disabled={todo.complete}><h6>Done</h6></button>
            <button onClick={() => handleDeleteTodo(todoIndex)}><h6>Delete</h6></button>
          </>
        )}
      </div>
    </div>
  );
}
