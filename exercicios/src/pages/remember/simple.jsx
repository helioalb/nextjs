import Titulo from "../../components/remember/Titulo"

export default function Simpler () {
  const text = 'Hello'

  return (
    <>
      <h1>{ text }</h1>
      <h2>{ 3 * 3}</h2>
      <Titulo 
        title="Titulo"
        subtitle="Subtitulo"
      />
    </>
  )
}