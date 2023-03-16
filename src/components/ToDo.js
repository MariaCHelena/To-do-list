function ToDo({toDoProps}){
    return (
        <>
            <ul>
                {toDoProps.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    )
}

export default ToDo