import ToDoItem from "./ToDoItem"
import Styles from "./ToDo.module.css"

function ToDo({toDoProps, delEvent, editEvent, url}){
    return (
        <>
            <ul className={Styles.toDoList}>
                {toDoProps.map(item => (
                    <ToDoItem key={item.id} item={item} delEvent={delEvent} editEvent={editEvent}/>
                ))}
            </ul>
        </>
    )
}

export default ToDo