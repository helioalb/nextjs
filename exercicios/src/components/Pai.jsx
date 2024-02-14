import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <Filho {...props} name = 'Fulano' />
      <Filho {...props} name = 'Beltrano' />
      <Filho {...props} />
    </div>
  )
}