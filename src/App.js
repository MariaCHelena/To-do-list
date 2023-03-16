import './App.css';
import { useState } from 'react';
import SendTask from './components/SendTask';

function App() {

  const [task, setTask] = useState('')
  const [list, setList] = useState([])

  return (
    <>
      <h1>To-do List</h1>
      <SendTask setTask={setTask} task={task} list={list} setList={setList}/>
    </>
  );
}

export default App;
