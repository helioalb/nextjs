export default function botao() {
  return (
    <>
      <button onClick={acao1}>Click #01</button>
      <button onClick={acao2}>Click #02</button>
      <button onClick={() => console.log('direto')}>Click #03</button>
    </>
  )
}

function acao1() {
  console.log('acao1')
}

function acao2(e) {
  console.log(e)
}