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
                <div className={Styles.toDoExhibit}>
                    <div className={Styles.toDoItemWrapper}>
                        <input type="checkbox" className={Styles.checkBox} hidden={edit}/>
                        <span className={Styles.listTitle} hidden={edit}>{item.title}</span>
                        <input type="text" value={item.title} onChange={(e) => editEvent(e.target.value, item.id)} hidden={!edit} onKeyDown={endUpdate}/>
                    </div>
                    <div className={Styles.toDoButtonsWrapper}>
                        <button onClick={() => delEvent(item.id)}>Delete</button>
                        <button onClick={onEdit} hidden={edit}>Edit</button> 
                    </div>
                </div>
            </li>
        </>
    )
}

export default ToDoItem