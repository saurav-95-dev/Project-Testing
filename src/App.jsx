import { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


export default function App() {
  //Array of objects will be passed as a props:s
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  // ]
  
  //Defining a stateful variable:
  const [todos , setTodos] = useState([ { input: 'Hello! Add your first todo!', complete: true }]);
  const [selectedTab , setSelectedTab] = useState("Open"); //Send these stateful variables to the Tabs component as props.

  //Handler functions :
  function handleAddTodo(newTodo){
   
    const newTodoList = [...todos , { input: newTodo , complete: false }];
    setTodos(newTodoList);
  }

  function handleEditTodo(){

  }

  function handleDeleteTodo(){

  }

  return (
    <>
      <Header todos={ todos} />
      <Tabs todos={ todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <TodoList todos={ todos}/> 
      <TodoInput handleAddTodo = {handleAddTodo} />
    </>
  )
}