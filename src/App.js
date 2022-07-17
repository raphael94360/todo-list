import "./App.scss";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  return (
    <div className="App">
      <header>
        <h1> TODO LIST</h1>
      </header>
      <main>
        <div className="task">
          {tasks.map((task, index) => {
            return (
              <div className="task" key={index}>
                <input type="checkbox" /> <p>{task}</p>
              </div>
            );
          })}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="new task"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              const tab = [...tasks];
              tab.push(text);
              setTasks(tab);
              setText("");
            }}
          >
            ADD TASK
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
