import Styles from './SendTask.module.css';
import {GiFairyWand} from 'react-icons/gi';

let nextId = 0

function SendTask({setTask, task, setList, list, background, selected, disabled, colors, handleChange}){

    return (
        <>
            <div className={Styles.inputComponents}>
                <input type="text" value={task} onChange={e => setTask(e.target.value)} className={Styles.inputText} maxLength='100'/>
                <button disabled={disabled} onClick={() => {
                    setTask('');
                    setList([...list, {id: nextId++, title: task, url: background[Math.floor(Math.random() * background.length)], type: selected, color: colors[selected.split(" ").join("")]}])
                }} className={Styles.sendButton}>Send <GiFairyWand/></button>
            </div>
            <div className={Styles.buttonTypesWrapper}>
                <input type="radio" id="mainMission" name="selectMission" value="Main Mission" checked={selected === 'Main Mission'} onChange={handleChange} className={Styles.radio}/>
                <label htmlFor='mainMission' style={{ backgroundColor: 'darkblue'}} className={Styles.typeButtons}>Main Mission</label>
                <input type="radio" id="sideMission" name="selectMission" value="Side Mission" checked={selected === 'Side Mission'} onChange={handleChange} className={Styles.radio}/>
                <label htmlFor='sideMission' style={{ backgroundColor: 'darkgreen'}} className={Styles.typeButtons}>Side Mission</label>
                <input type="radio" id="event" name="selectMission" value="Event"  checked={selected === 'Event'} onChange={handleChange} className={Styles.radio}/>
                <label htmlFor='event' style={{ backgroundColor: 'darkred'}} className={Styles.typeButtons}>Event</label>
            </div>
        </>
    )
}

export default SendTask