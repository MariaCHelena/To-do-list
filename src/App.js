import Styles from './App.module.css';
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

  return (
    <main>
      <section className={Styles.inputSection}>
        <h1>To-do List</h1>
        <SendTask setTask={setTask} task={task} list={list} setList={setList}/>
      </section>
      <section className={Styles.outputSection}>
        <ToDo toDoProps={list} delEvent={onDelete} editEvent={setUpdate}/>
      </section>
    </main>
  );
}

export default App;
