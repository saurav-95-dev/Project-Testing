import { useState, useEffect } from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Auth from "./Auth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function App() {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([{ input: "Hello! Add your first todo!", complete: true }]);
  const [selectedTab, setSelectedTab] = useState("Open");

  useEffect(() => {
    // Check if the user is already logged in when the app loads
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    const newTodoList = [...todos];
    newTodoList[index].complete = true;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, valIndex) => index !== valIndex);
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleEditTodo(index, newInput) {
    const newTodoList = [...todos];
    newTodoList[index].input = newInput;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }

  useEffect(() => {
    if (!localStorage.getItem("todo-app")) return;
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  async function handleLogout() {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  }

  return (
    <>
      {!user ? (
        <Auth setUser={setUser} />
      ) : (
        <>
          <Header todos={todos} />
          <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <TodoList handleEditTodo={handleEditTodo} handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} selectedTab={selectedTab} />
          <TodoInput handleAddTodo={handleAddTodo} />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </>
  );
}