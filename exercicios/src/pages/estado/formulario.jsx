import { useState } from 'react'

export default function formulario() {
  const [valor, setValor] = useState('')

  return (
    <div>
      <input type="text" value={valor} onChange={e => setValor(e.target.value)}/>
      <br />
      <span>{valor}</span>
    </div>
  )
}