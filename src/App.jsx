import { Phone } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Login from './login'

function App() {

  const [count, setcount] = useState(0)
  const [user, setUser] = useState({
    name: " ",
    Phone: 0,
    Address: " ",
    Email: " ",
    Password: ' '

  })

  const [todos, setTodos] = useState([])

  const [input, setInput] = useState("");

  //add
  const addItem = () => {
    if(input.trim() === "")
      return

    setTodos([...todos, input])
    setInput("")
  }

  const removeItem = (index) => {
    setTodos(todos.filter((_, i) => i != index))
  }

  const initialUser = {
    name: "",
    Phone: 0,
    Address: "",
    Email: "",
    Password: ""
  }

  const updateUser = (data) => {
    setUser((pre) => ({
      ...pre,
      ...data
    }))

  }
 
  useEffect (() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <header className='bg-green-800 absolute w-full top-0 text-white text-4xl font-bold text-center p-4 '>TEST FOR REACT LESSONS</header>
      <div className='mt-[10%] m-10'>
        <div className='w-full  flex flex-col mb-10 justify-center text-center items-center'>
          <h1 className={`mb-7 text-5xl ${count < 10 ? "text-red-600" : count < 20 ? "text-yellow-400" : count > 50 ? "text-blue-500" : "text-black"}`}>count {count}</h1>
          <div className='flex gap-4'>
            <button className='bg-yellow-500 px-10 py-2 mt-4 rounded-lg text-3xl text-white'
              onClick={() => setcount(count == 100 ? 100 : count + 1)}>Next</button>

            <button className='bg-yellow-500 px-10 py-2 mt-4 rounded-lg text-3xl text-white'
              onClick={() => setcount(count == 0 ? 0 : count - 1)}>pre</button>
          </div>
        </div>

        <div className='bg-white shadow-lg rounded-xl p-6 w-[350px] text-left ml-[40%] mb-36'>

          <h2 className='text-2xl font-bold mb-3 text-center'>User Info</h2>

          <div className='space-y-3 text-gray-700'>

            <p><span className='font-bold'>Name:</span> {user.name}</p>

            <p><span className='font-bold'>Phone:</span> {user.Phone}</p>

            <p><span className='font-bold'>Address:</span> {user.Address}</p>

            <p><span className='font-bold'>Email:</span> {user.Email}</p>

            <p><span className='font-bold'>Password:</span> {user.Password}</p>

          </div>

          {/* BUTTON */}
          <button className='w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-lg font-semibold transition-all'
            onClick={() =>
              setUser((pre) =>
                pre.name ?
                  {
                    name: "",
                    Address: "",
                    Phone: 0,
                    Email: "",
                    Password: ""
                  } : {
                    name: "isse alim ahmed ",
                    Address: "dayniile ",
                    Phone: 828345750,
                    Email: "cise@gmail.com",
                    Password: "12345"

                  })
            } >
            {user.name ? "Delete User" : "Edit User"}
          </button>

         
        </div>


<div className="flex justify-center gap-3 mt-6">
  
  {/* Input (design only) */}
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Enter task..."
    className="border px-4 py-2 rounded-lg w-64  focus:ring-green-400"
  />

  {/* Add button (no functionality) */}
  <button
    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all"
  onClick={addItem}>
    Add
  </button>

</div>
<div>
  {todos.map((t, index) => (
    <div key={index} className="flex justify-between items-center bg-gray-100 p-3 mt-3 rounded-lg">
      
      {/* Show single todo item */}
      <h1 className="text-lg">{t}</h1>

      {/* Delete button (no functionality) */}
      <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
      onClick={() => removeItem(index)}>
        Delete
      </button>

    </div>
  ))}
</div>

      </div>





<Login />
    </div >

    
  )
}

export default App
