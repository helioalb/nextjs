export default function Titulo({pequeno, principal, secundario}) {
  return pequeno ?
  (
    <>
      <p>{principal}</p>
      <p>{secundario}</p>
    </>
  ) : (
    <>
      <h1>{principal}</h1>
      <h2>{secundario}</h2>
    </>
  )
}