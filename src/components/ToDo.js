import ToDoItem from "./ToDoItem"

function ToDo({toDoProps, delEvent, editEvent}){
    return (
        <>
            <ul>
                {toDoProps.map(item => (
                    <ToDoItem id={item.id} title={item.title} delEvent={delEvent} editEvent={editEvent}/>
                ))}
            </ul>
        </>
    )
}

export default ToDo