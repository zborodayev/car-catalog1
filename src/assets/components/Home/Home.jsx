import { useState } from "react"

export const Home = () => {
  const [text, setText] = useState('')
  const createText = (e) => {
    e.preventDefault();
    return <div>{text}</div>
  } 
  return (
  <div>
    <input placeholder='Text' onChange={e => setText(() => e.target.value)} value={text}/>
    <button onClick={createText}>create</button>
    
  </div>
  )
}
