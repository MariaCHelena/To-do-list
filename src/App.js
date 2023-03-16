import './App.css';
import { useState } from 'react';
import SendTask from './components/SendTask';
import ToDo from './components/ToDo';

function App() {

  const [task, setTask] = useState('')
  const [list, setList] = useState([])
  const [edit, setEdit] = useState(false)

  const onDelete = (id) => {
    setList((listItens) => {
      return listItens.filter((item) => item.id !== id)
    })
  }

  const onEdit = () => {
    setEdit(true);
  }


  const setUpdate = (updatedText, id) => {
    setList(
      list.map((item) => {
        if (item.id === id){
          item.title = updatedText;
        }
        return item
      })
    )
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter'){
      setEdit(false);
    }
  }

  return (
    <>
      <h1>To-do List</h1>
      <SendTask setTask={setTask} task={task} list={list} setList={setList}/>
      <ToDo toDoProps={list} delEvent={onDelete} editEvent={setUpdate} show={edit} onEdit={onEdit} endUpdate={handleUpdatedDone}/>
    </>
  );
}

export default App;
