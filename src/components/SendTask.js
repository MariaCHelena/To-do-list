

let nextId = 0

function SendTask({setTask, task, setList, list}){
    return (
        <>
            <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
            <button onClick={() => {
                setTask('');
                setList([...list, {id: nextId++, title: task}])
            }}>Enviar</button>
        </>
    )
}

export default SendTask