import Lista from "../../components/Lista";
import Item from "../../components/Item";

export default function componentComFilho() {
  return (
    <Lista>
      <Item content = '#01'/>
      <Item content = '#02'/>
      <Item content = '#03'/>
    </Lista>
  )
}