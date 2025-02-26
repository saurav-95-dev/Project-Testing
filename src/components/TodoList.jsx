//The TodoList is going to be dependent on the tab that's currently opened :
import TodoCard from "./TodoCard";

 
export default function TodoList(props) {
    const { todos } = props;
    const tab = "All";
    let filterTodoList = ""
    if (tab == "All") {
        filterTodoList = todos;
    }
    else if (tab == "Open") {
        filterTodoList = todos.filter(val => !val.complete);
    }
    else {
        filterTodoList = todos.filter(val => val.complete);
    }
    return (
        <>
            {
                filterTodoList.map((todo , todoIndex) => {
                    return (
                        <TodoCard key={ todoIndex} todo={todo} />
                    )
                })
            }
        </>
     )
 }