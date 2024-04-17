type TitleProps = {
  title: string,
  subtitle?: string
}

export default function Titulo({ title, subtitle }: TitleProps) {
  return (
    <>
      <h1>{ title }</h1>
      <h2>{ subtitle }</h2>
    </>
  )
}