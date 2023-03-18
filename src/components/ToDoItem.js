import { useRef, useState } from 'react';
import Styles from './ToDoItem.module.css';
import {GiTrashCan, GiPencilBrush, GiCheckMark, GiAbstract066} from 'react-icons/gi';

function ToDoItem({item, delEvent, editEvent}){

    const [edit, setEdit] = useState(false)

    const onEdit = () => {
        getTextHeight();
        setEdit(true);
    }

    const endUpdate = (event) => {
        if (event.key === 'Enter'){
          setEdit(false);
        }
    }

    let textareaHeight = {}
    const getHeight = useRef()
    const [width, setWidth] = useState()
    const getTextHeight = () => {
        setWidth(getHeight.current.clientHeight)
    }

    if (edit){
        textareaHeight.height = `${width}px`
    }


    return (
        <>
            <li>
                <div className={Styles.toDoExhibit} style={{backgroundImage:`url(${item.url})`}}>
                    <span className={Styles.toDoDecoration} style={{color: item.color}}><GiAbstract066 />{item.type}<GiAbstract066 /></span>
                    <div className={Styles.toDoItemWrapper} >
                        <input type="checkbox" className={Styles.checkBox} id={`check${item.id}`} name={`check${item.id}`} hidden={edit}/>
                        <span className={Styles.listTitle} hidden={edit} ref={getHeight}>{item.title}</span>
                        <textarea onChange={(e) => editEvent(e.target.value, item.id)} hidden={!edit} onKeyDown={endUpdate} className={Styles.textareaEdit} style={textareaHeight}>{item.title}</textarea>
                    </div>
                    <div className={Styles.toDoButtonsWrapper}>
                        <label hidden={edit} htmlFor={`check${item.id}`} className={Styles.toDoButtons}><GiCheckMark /></label>
                        <span onClick={() => delEvent(item.id)} className={Styles.toDoButtons}><GiTrashCan /></span>
                        <span onClick={onEdit} hidden={edit} className={Styles.toDoButtons}><GiPencilBrush /></span> 
                    </div>
                </div>
            </li>
        </>
    )
}

export default ToDoItem