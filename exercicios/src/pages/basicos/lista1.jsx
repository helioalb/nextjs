export default function lista1() {
  return (
    <div>
      {spans(10)}
    </div>
  )
}

function spans(quantity) {
  const elements = []
  for (let index = 1; index <= quantity; index++)
    elements.push(<span key={index}>{index},</span>)
  
  return elements;
}