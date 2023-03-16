function ToDoItem({id, title, delEvent, editEvent, show, onEdit, endUpdate}){
    return (
        <>
            <li key={id}>
                <div hidden={show}>
                    <span>{title}</span>
                    <button onClick={() => delEvent(id)}>Delete</button>
                    <button onClick={onEdit}>Edit</button>
                </div>
                <input type="text" value={title} onChange={(e) => editEvent(e.target.value, id)} hidden={!show} onKeyDown={endUpdate}/>
            </li>
        </>
    )
}

export default ToDoItem