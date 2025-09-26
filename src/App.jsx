import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importa o ProfileCard
import ProfileCard from './ProfileCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Aqui começam os cards do exercício */}
      <div style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
        <ProfileCard name="Maria" age={21} isStudent={true} />
        <ProfileCard name="João" age={30} isStudent={false} />
      </div>
    </>
  )
}

export default App