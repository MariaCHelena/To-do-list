import Styles from './App.module.css';
import { useState } from 'react';
import SendTask from './components/SendTask';
import ToDo from './components/ToDo';
import backgroundPaper1 from './pictures/paper1.jpg'
import backgroundPaper2 from './pictures/paper2.jpg'
import backgroundPaper3 from './pictures/paper3.jpg'

function App() {

  const [task, setTask] = useState('')
  const [list, setList] = useState([])
  const backgroundImageToDos = [backgroundPaper1, backgroundPaper2, backgroundPaper3]

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
        <h1 className={Styles.title}>Send Missions!</h1>
        <SendTask setTask={setTask} task={task} list={list} setList={setList} background={backgroundImageToDos}/>
      </section>
      <section className={Styles.outputSection}>
        <h2 className={Styles.boardTitle}>Mission Bouletin Board</h2>
        <ToDo toDoProps={list} delEvent={onDelete} editEvent={setUpdate}/>
      </section>
    </main>
  );
}

export default App;
