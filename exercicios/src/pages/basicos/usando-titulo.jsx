import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
  return (
    <div>
      <Titulo 
        principal='Tela de cadastro'
        secundario='Incluir, excluir, atualizar'
      />

      <Titulo 
        principal='Tela de login'
        secundario='Informe seu nome e senha'
        pequeno={true}
      />

      <Titulo 
        principal='Tela de login'
        secundario='Informe seu nome e senha'
        pequeno
      />
    </div>
  )
}