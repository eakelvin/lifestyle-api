import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserClass from './UserClass'
import UserFunction from './UserFunction'

function App() {

  return (
    <>
      <UserClass />
      <hr />
      <UserFunction />
    </>
  )
}

export default App
