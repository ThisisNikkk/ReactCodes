import { useState } from 'react'

function App() {
  const[color, setColor]= useState("black");
  return (
    <div className= "w-full h-screen duration-200"
      style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 bg-red-600 rounded-full'>Red</button>
          <button onClick={()=> setColor("blue")} className='outline-none px-4 py-1 bg-blue-600 rounded-full'>Blue</button>
          <button onClick={()=> setColor("green")} className='outline-none px-4 py-1 bg-green-600 rounded-full'>Green</button>
          <button onClick={()=> setColor("yellow")} className='outline-none px-4 py-1 bg-yellow-300 rounded-full'>Yellow</button>
          <button onClick={()=> setColor("orange")} className='outline-none px-4 py-1 bg-orange-400 rounded-full'>Orange</button>
          <button onClick={()=> setColor("violet")} className='outline-none px-4 py-1 bg-violet-500 rounded-full'>Violet</button>
        </div>
      </div>
    </div>
  )
}

export default App
