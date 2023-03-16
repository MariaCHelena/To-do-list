import ToDoItem from "./ToDoItem"

function ToDo({toDoProps, delEvent, editEvent, show, onEdit, setUpdate, endUpdate}){
    return (
        <>
            <ul>
                {toDoProps.map(item => (
                    <ToDoItem id={item.id} title={item.title} delEvent={delEvent} editEvent={editEvent} show={show} onEdit={onEdit} setUpdate={setUpdate} endUpdate={endUpdate}/>
                ))}
            </ul>
        </>
    )
}

export default ToDo