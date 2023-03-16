function ToDoItem({id, title, delEvent}){
    return (
        <>
            <li key={id}>{title}</li>
            <button onClick={() => delEvent(id)}>Delete</button>
        </>
    )
}

export default ToDoItem