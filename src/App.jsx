import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Navbar></Navbar>
      </div>
    </>
  )
}

export default App
