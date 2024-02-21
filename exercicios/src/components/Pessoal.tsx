type PessoaProps = {
  name: string
  age?: number
}

export default function Pessoa({name, age}: PessoaProps) {
  return (
    <div>
      <h2>Nome: {name}</h2>
      <h2>Idade: {age ?? "Não informado"}</h2>
    </div>
  )
}