import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import InputName from './components/InputName'
import Pokemon from './components/Pokemon'
import PokemonId from './components/PokemonId'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  // const [count, setCount] = useState(0)
  
  
  return (
    <div className="App" >
      
     <HashRouter>
      <Routes>
        <Route path='/' element={<InputName/>}/>
        

        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokemon' element={<Pokemon/>}/>
          <Route path='/pokemon/:id'element={<PokemonId/>}/>
        </Route>
      </Routes>
     </HashRouter>
    </div>
  )
}

export default App
