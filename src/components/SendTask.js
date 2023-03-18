import Styles from './SendTask.module.css'

let nextId = 0

function SendTask({setTask, task, setList, list, background, selected, disabled, color, handleChange}){

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