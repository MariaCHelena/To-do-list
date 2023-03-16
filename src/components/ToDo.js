import ToDoItem from "./ToDoItem"

function ToDo({toDoProps}){
    return (
        <>
            <ul>
                {toDoProps.map(item => (
                    <ToDoItem id={item.id} title={item.title}/>
                ))}
            </ul>
        </>
    )
}

export default ToDo