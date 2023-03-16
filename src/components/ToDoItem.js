import { useState } from 'react';
import Styles from './ToDoItem.module.css'

function ToDoItem({id, title, delEvent, editEvent}){

    const [edit, setEdit] = useState(false)

    const onEdit = () => {
        setEdit(true);
    }

    const endUpdate = (event) => {
        if (event.key === 'Enter'){
          setEdit(false);
        }
    }

    return (
        <>
            <li key={id}>
                <div hidden={edit}>
                    <input type="checkbox" className={Styles.checkBox}/>
                    <span className={Styles.listTitle}>{title}</span>
                    <button onClick={() => delEvent(id)}>Delete</button>
                    <button onClick={onEdit}>Edit</button>
                </div>
                <input type="text" value={title} onChange={(e) => editEvent(e.target.value, id)} hidden={!edit} onKeyDown={endUpdate}/>
            </li>
        </>
    )
}

export default ToDoItem