import { useState } from "react"

export default function mouse() {
  const [x, setX] = useState(0)

  const arrayY = useState(0)
  let y = arrayY[0]
  const alteraY = arrayY[1]

  function changeXY(e) {
    setX(e.clientX)
    alteraY(e.clientY)
  }

  return (
    <div style={{height: "100vh"}} onMouseMove={changeXY}>
      <span>X: {x}</span>
      <span>--</span>
      <span>Y: {y}</span>
    </div>
  )
}