import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, Routes } from 'react-router-dom'
import Product from 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Router>
      <h1>My  online Shop</h1>
      <link to="/">Home</link>
      <link to="/cart">Home</link>
      <hr />
      <header>

      </header>
      
      <main>
        <Routes>
          <route index element={<product />}/>
           <route path="/cart" element={<cart/>}/>
<h2> products list</h2>
</Routes>
      </main>

      <footer>
     <hr />
     &copy; 2005. All rights to users

      </footer>
      </Router>
      </div>
    </>
  )
}

export default App
