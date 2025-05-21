import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Router, Routes } from 'react-router-dom'
import Product from './components/products'
import 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <BrowserRouterRouter>
      <h1>My  online Shop</h1>
      <link to="/">Home</link>
      <link to="/cart">cart</link>
      <hr />
      <header>

      </header>
      
      <main>
        <Routes>
          <route index element={<products />}/>
          <route path="/" element={<products/>}/>
           <route path="/cart" element={<cart/>}/>
<h2> products list</h2>
</Routes>
      </main>

      <footer>
     <hr />
     &copy; 2005. All rights to users

      </footer>
      </BrowserRouterRouter>
      </div>
    </>
  )
}

export default App
