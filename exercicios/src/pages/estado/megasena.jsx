import { useState } from "react"
import { mega } from "../../functions/mega"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function megasena() {
  const [numeros, setNumeros] = useState()
  const [qtd, setQtd] = useState(6)

  function renderNumeros() {
    return numeros?.map(n => <ContadorDisplay key={n} counter={n} />)
  }

  return (
    <div>
      <div>{renderNumeros()}</div>

      <input type="number" min={6} max={60} value={qtd}
        onChange={e => setQtd(e.target.value)} />
      <button onClick={() => setNumeros(mega(parseInt(qtd)))}>Gerar números</button>
    </div>
  )
}