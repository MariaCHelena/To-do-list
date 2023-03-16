function ToDoItem({id, title}){
    return (
        <>
            <li key={id}>{title}</li>
        </>
    )
}

export default ToDoItem