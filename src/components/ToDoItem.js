import { useState } from 'react';
import Styles from './ToDoItem.module.css'

function ToDoItem({item, delEvent, editEvent}){

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
            <li>
                <div hidden={edit}>
                    <input type="checkbox" className={Styles.checkBox}/>
                    <span className={Styles.listTitle}>{item.title}</span>
                    <button onClick={() => delEvent(item.id)}>Delete</button>
                    <button onClick={onEdit}>Edit</button>
                </div>
                <input type="text" value={item.title} onChange={(e) => editEvent(e.target.value, item.id)} hidden={!edit} onKeyDown={endUpdate}/>
            </li>
        </>
    )
}

export default ToDoItem