import './App.css'
import Card from './components/card' 

function App() {


  return (
    <>
      <div className='bg-white rounded-xl'>
        <h1 className='bg-green-500 text-black rounded-xl capitalize hover:uppercase cursor-pointer text-2xl p-2 mb-2 mt-2 w-[50%] inline-flex items-center justify-center font-sans-serif-500'>
          Check Out!!
        </h1>
        <br />
        < Card />
      </div>
    </>
  )
}

export default App
