import { useState } from 'react'

import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (

        <div className = "App">
         <nav id="navbar">
          <Link to ="/movie/1">TesteLib</Link>
         </nav>
         <Link to ="/pesquisa">Pesquisa</Link>

          <h2>Teste</h2>
          </div>
  
  )
}

export default App
