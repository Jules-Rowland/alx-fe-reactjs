import { useState } from 'react'
import Homepage from './components/HomePage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='text- text-blue-500 '>Welcome to My Recipe Book</div>
     <Homepage/>
    </>
  )
}

export default App
