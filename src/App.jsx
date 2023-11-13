import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col h-screen bg-gradient-to-t from-violet-500 to-fuchsia-500 items-center justify-center'>
        <h1 className='text-3xl m-4'>Your next fly!</h1>
        <button
          className='bg-cyan-500 shadow-cyan-500/50 p-2 rounded-md shadow-lg'
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
