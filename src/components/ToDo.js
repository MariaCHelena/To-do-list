import ToDoItem from "./ToDoItem"

function ToDo({toDoProps, delEvent}){
    return (
        <>
            <ul>
                {toDoProps.map(item => (
                    <ToDoItem id={item.id} title={item.title} delEvent={delEvent}/>
                ))}
            </ul>
        </>
    )
}

export default ToDo