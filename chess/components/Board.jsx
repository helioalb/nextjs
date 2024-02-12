import Row from './Row'
import style from './Board.module.css'

export default function Board() {
  return <div className={style.board}>{rows()}</div>
}

function rows() {
  const rows = []

  for (let index = 0; index < 8; index++)
    rows.push(<Row startWhite={index % 2 === 0} />)

  return rows
}