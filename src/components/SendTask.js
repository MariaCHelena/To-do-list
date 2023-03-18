import Styles from './SendTask.module.css'
import {useState} from 'react'

let nextId = 0

function SendTask({setTask, task, setList, list, background}){

    const [selected, setSelected] = useState()
    const [disabled, setDisabled] = useState(true)
    let color

    const handleChange = event => {
        setSelected(event.target.value)
        setDisabled(false)

        switch (selected) {
            case 'mainMission':
                color = `green`
                break;
            case 'sideMission':
                color = `blue`
                break
            case 'event':
                color = `red`
                break
        
            default:
                break;
        }
    }

    return (
        <>
            <div className={Styles.inputComponents}>
                <input type="text" value={task} onChange={e => setTask(e.target.value)} className={Styles.inputText}/>
                <button disabled={disabled} onClick={() => {
                    setTask('');
                    setList([...list, {id: nextId++, title: task, url: background[Math.floor(Math.random() * background.length)], type: selected, color: color}])
                }} className={Styles.sendButton}>Enviar</button>
            </div>
            <div>
                <input type="radio" id="mainMission" name="selectMission" value="mainMission" checked={selected === 'mainMission'} onChange={handleChange}/>
                <label htmlFor='mainMission'>Main Mission</label>
                <input type="radio" id="sideMission" name="selectMission" value="sideMission" checked={selected === 'sideMission'} onChange={handleChange}/>
                <label htmlFor='sideMission'>Side mission</label>
                <input type="radio" id="event" name="selectMission" value="event"  checked={selected === 'event'} onChange={handleChange}/>
                <label htmlFor='event'>Event</label>
            </div>
        </>
    )
}

export default SendTask