import ToDoItem from "./ToDoItem"

function ToDo({toDoProps, delEvent, editEvent}){
    return (
        <>
            <ul>
                {toDoProps.map(item => (
                    <ToDoItem key={item.id} item={item} delEvent={delEvent} editEvent={editEvent}/>
                ))}
            </ul>
        </>
    )
}

export default ToDo