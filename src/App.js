import './App.css';
import { useState } from 'react';
import SendTask from './components/SendTask';
import ToDo from './components/ToDo';

function App() {

  const [task, setTask] = useState('')
  const [list, setList] = useState([])

  const onDelete = (id) => {
    setList((listItens) => {
      return listItens.filter((item) => item.id !== id)
    })
  }

  return (
    <>
      <h1>To-do List</h1>
      <SendTask setTask={setTask} task={task} list={list} setList={setList}/>
      <ToDo toDoProps={list} delEvent={onDelete}/>
    </>
  );
}

export default App;
