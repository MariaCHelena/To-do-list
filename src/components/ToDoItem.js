function ToDoItem({id, title, delEvent, editEvent, show, onEdit, setUpdate, endUpdate}){
    return (
        <>
            <li key={id}>
                <div>
                    <span>{title}</span>
                    <button onClick={() => delEvent(id)}>Delete</button>
                    <button>Edit</button>
                </div>
                <input type="text" value={title} onChange={(e) => editEvent(e.target.value, id)}/>
            </li>
        </>
    )
}

export default ToDoItem