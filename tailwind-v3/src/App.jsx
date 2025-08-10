import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/common/Card'
import Content from './components/Layouts/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-blue-500 text-white p-4">
<Content/>
</div>

</>
  )
}

export default App
