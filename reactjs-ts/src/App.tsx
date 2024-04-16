import React, { useState } from 'react';
import './App.css'
import { ImageHeader } from './componants/imageHeader'
import { Input } from './componants/Input';
import { Button } from './componants/Button';
import { Item } from './Type';
function App() {

  
  const [items,setitems]=useState<Item[]>([])
  const [inputValue,setInputVallue]=useState<string>("")

  const handleSubmit=(event:React.FormEvent)=>{
    event.preventDefault();
    setitems((prev)=>[...prev, {title:inputValue,id:Date.now().toString()}]);
    setInputVallue("");
    
    }
    
  return <div 
  className='h-[100vh] flex flex-col justify-center items-center'>
    <ImageHeader/>
    <div className=' w-[350px]'>
      <form action="" className='md-5' onSubmit={handleSubmit}>
       <Input inputValue={inputValue} setInputVallue={setInputVallue}/>
        <Button className='w-full bg-blue-700 mt-2 mb-2' >add</Button>
      </form>
      <div className='rounded-sm h-52 overflow-y-auto '>
       
      </div>
    </div>
  </div>

  
}
export default App
