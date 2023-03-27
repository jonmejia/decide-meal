import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Dinner from './Dinner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Breakfast/>
    <Lunch/>
    <Dinner/>
    </>
  )
}

export default App
