export default function Estilo({numero}) {
  return (
    <div>
      <h1 style={{backgroundColor: numero >= 0 ? '#2D2' : '#D22'}}>
        Texto
      </h1>
    </div>
  )
}