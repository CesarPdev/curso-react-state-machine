import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col h-screen items-center justify-center'>
        <h1 className='text-3xl m-4'>Hello World!</h1>
        <button
          className='border p-2 rounded-md'
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
