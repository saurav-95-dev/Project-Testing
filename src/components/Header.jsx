import PropTypes from "prop-types"; //Used for validating props in react components

export default function Header(props) {

    const { todos } = props;
    const todosLength = todos.length;
    let isTaskPlural = todosLength;
    let taskOrTasks = "tasks";
    if(isTaskPlural != 1){
        taskOrTasks = "tasks"
    }
    else{
        taskOrTasks = "task"
    }
    return (
        <header>
            
            {/* The number of tasks is dependent on Tabs component . */}
            <h1 className="text-gradient">You have {todosLength} open { taskOrTasks}</h1>
        </header>
    )
}

Header.propTypes = {
    todos : PropTypes.array.isRequired,
}