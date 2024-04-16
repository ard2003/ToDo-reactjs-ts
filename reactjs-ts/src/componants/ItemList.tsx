import { MdOutlineDelete } from "react-icons/md";
import { Button } from "./Button";
import { Item } from "../Type";
type Items={
items:Item[];
setitems:React.Dispatch<React.SetStateAction<Item[~]>>
}
export const ItemList = ({items,setitems}:Items) => {
    const handeDelete=(id:string)=> {
        setitems((prev)=>prev.filter((data)=>data.id !==id ))
    }
  return (
    items.map((data)=>(
        <div key={data.id} className='flex justify-between items-center m-2 border-white border-2 rounded-md'>
          <p>{data.title}</p>
          <Button onClick={()=>handeDelete(data.id)}><MdOutlineDelete /></Button>
          
        </div>
        ))
  )
}
