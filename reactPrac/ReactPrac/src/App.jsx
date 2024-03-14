import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Forms from './components/Forms'

function App() {
  

  return (
    <>
    <NavBar/>
    <h1>Welcome</h1>
    <Forms/>
    <Footer />
    </>
  )
}

export default App
