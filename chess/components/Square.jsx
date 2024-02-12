import style from './Square.module.css'

export default function Square(props) {
  return <div className={style.square} style={{backgroundColor: props.color}}></div> 
}