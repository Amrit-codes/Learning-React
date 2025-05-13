import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicketNum from './ticketNum.jsx'

function App() {


  return (

    <>


      <TicketNum num={5} />
      <TicketNum num={5} />
      <TicketNum num={5} />
      <TicketNum num={5} />

    </>

  )
}

export default App
