export default function repeticao1() {
  const listaAprovados = [
    'João',
    'Maria',
    'Ana',
    'Bia',
    'Carlos',
    'Daniel',
    'Laura'
  ]

  function renderizaLista() {
    return listaAprovados.map((name, i) => <li key={i}>{name}</li>)
  }

  return (
    <ul>
      {renderizaLista()}
    </ul>
  )
}