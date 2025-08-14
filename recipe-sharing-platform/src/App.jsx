import { useState } from 'react'
import Homepage from './components/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-blue-500'>Welcome to my Page</div>
      <Homepage/>
    </>
  )
}

export default App
