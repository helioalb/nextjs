import Filho from "./Filho";

export default function Pai() {
  return (
    <Filho funcao={falaComigo} />
  )
}

function falaComigo(mensagem) {
  console.log(mensagem)
}