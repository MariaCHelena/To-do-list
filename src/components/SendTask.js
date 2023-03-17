import Styles from './SendTask.module.css'

let nextId = 0

function SendTask({setTask, task, setList, list, background}){

    return (
        <div className={Styles.inputComponents}>
            <input type="text" value={task} onChange={e => setTask(e.target.value)} className={Styles.inputText}/>
            <span onClick={() => {
                setTask('');
                setList([...list, {id: nextId++, title: task, url: background[Math.floor(Math.random() * background.length)]}])
            }} className={Styles.sendButton}>Enviar</span>
        </div>
    )
}

export default SendTask