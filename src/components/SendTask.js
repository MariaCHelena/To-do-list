import Styles from './SendTask.module.css'

let nextId = 0

function SendTask({setTask, task, setList, list, background, selected, disabled, colors, handleChange}){

    return (
        <>
            <div className={Styles.inputComponents}>
                <input type="text" value={task} onChange={e => setTask(e.target.value)} className={Styles.inputText}/>
                <button disabled={disabled} onClick={() => {
                    setTask('');
                    setList([...list, {id: nextId++, title: task, url: background[Math.floor(Math.random() * background.length)], type: selected, color: colors[selected.split(" ").join("")]}])
                }} className={Styles.sendButton}>Enviar</button>
            </div>
            <div>
                <input type="radio" id="mainMission" name="selectMission" value="Main Mission" checked={selected === 'Main Mission'} onChange={handleChange}/>
                <label htmlFor='mainMission'>Main Mission</label>
                <input type="radio" id="sideMission" name="selectMission" value="Side Mission" checked={selected === 'Side Mission'} onChange={handleChange}/>
                <label htmlFor='sideMission'>Side mission</label>
                <input type="radio" id="event" name="selectMission" value="Event"  checked={selected === 'Event'} onChange={handleChange}/>
                <label htmlFor='event'>Event</label>
            </div>
        </>
    )
}

export default SendTask