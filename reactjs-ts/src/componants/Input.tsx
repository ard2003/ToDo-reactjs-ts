type Input={
    inputValue:string,
    setInputVallue:React.Dispatch<React.SetStateAction<string>>
    
}

export const Input = ({inputValue,setInputVallue}:Input) => {
  return (
    <input type="text" className='rounded-sm w-full text-black'
    value={inputValue} onChange={(event)=>setInputVallue(event.target.value)}/>
  )
}
