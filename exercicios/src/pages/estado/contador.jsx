import { useState } from 'react'
import ContadorDisplay from '../../components/ContadorDisplay'

export default function contador() {
  const [counter, setCounter] = useState(0)

  function add() {
    setCounter(counter + 1)
  }

  const sub = () => setCounter(counter - 1)

  return (
    <div>
      <h1>Contador</h1>
      <ContadorDisplay counter={counter} /> 
      <button onClick={sub}>-</button>
      <button onClick={add}>+</button>
    </div>
  )
}