import Pessoa from "@/components/Pessoal";

export default function Exemplo() {
  return (
    <div>
      <Pessoa name="Helio" age={45}/>
      <Pessoa name="Ana"/>
    </div>
  )
}