import Square from './Square'

export default function Row(props) {
  return <div style={{display: 'flex'}}>{row(props.startWhite)}</div>
}

function row(startWhite = false) {
  const start = startWhite ? 0 : 1;
  const end = startWhite ? 8 : 9;

  const squares = []
  for (let index = start; index < end; index++) {
    const mod = index % 2;
    squares.push(<Square color={mod === 0 ? 'white' : 'black'}/>)
  }
  return squares
}