function ToDoItem({id, title, delEvent}){
    return (
        <>
            <li key={id}>
                <span>{title}</span>
                <button onClick={() => delEvent(id)}>Delete</button>
                <button>Edit</button>
                <input type="text" />
            </li>
        </>
    )
}

export default ToDoItem