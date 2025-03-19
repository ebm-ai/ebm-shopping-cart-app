import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={() => setCount((count) => count + 1)}>Click me</button>
        </p>
        <p>
          <span data-testid="count">{count}</span>
        </p>
      </header>
    </div>
  )
}

export default App
