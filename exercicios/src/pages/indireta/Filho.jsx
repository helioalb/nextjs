export default function Filho(props) {
  return (
    <>
      <h1>Filho</h1>
      <button onClick={() => props.funcao('Passei no ENEM')}>Fala comigo</button>
    </>
  )
}