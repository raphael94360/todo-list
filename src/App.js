import "./App.scss"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useState } from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTrashCan, faTableList } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
library.add(faTrashCan, faTableList)

function App() {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState("")
  return (
    <div className="App">
      <header>
        <span>
          <FontAwesomeIcon icon="fa-solid fa-table-list" />
        </span>
        <Header title={"TODO LIST"} />
      </header>
      <main>
        <div className="task-container">
          {tasks.map((task, index) => {
            return (
              <div className="task" key={index}>
                <input
                  type="checkbox"
                  checked={task.isDone ? true : false}
                  onChange={() => {
                    const tab = [...tasks]
                    tab[index].isDone = !tab[index].isDone
                    setTasks(tab)
                  }}
                />
                <p className={task.isDone === true ? "done" : ""}>{task.label}</p>
                <span
                  onClick={() => {
                    const tab = [...tasks]
                    tab.splice(index, 1)
                    setTasks(tab)
                  }}
                >
                  <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                </span>
              </div>
            )
          })}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="new task"
            value={text}
            onChange={event => {
              setText(event.target.value)
            }}
          />
          <button
            onClick={() => {
              if (text.length > 3) {
                const tab = [...tasks]
                const obj = { label: text, isDone: false }
                tab.push(obj)
                setTasks(tab)
                setText("")
              }
            }}
          >
            ADD TASK
          </button>
        </div>
      </main>
      <footer>
        <div className="footer-container">
          <Footer text={"Todo List Made with React by Raphaël"} />
        </div>
      </footer>
    </div>
  )
}

export default App
