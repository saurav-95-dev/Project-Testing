
export default function Header(props) {

    const { todos } = props;
    const todosLength = todos.length;
    let isTaskPlural = ""
    if (todosLength == 1) {
        isTaskPlural = "ticket"
    }
    else {
        isTaskPlural = "tickets"
    }

    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} open {isTaskPlural}.</h1>
       </header>
    )
}