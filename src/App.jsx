import { Route, Routes} from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
import Home from './others/Home'
import Pokedex from './others/Pokedex'
import PokedexById from './others//PokedexById'

function App() {
  return (
        
<div className="App">
    <Routes>
     <Route path='/'element={<Home/>}/>
      <Route element={<ProtectedRoutes/>}>
      <Route path='pokedex' element={<Pokedex/>}/>
      <Route path='/pokedex/:id' element={<PokedexById/>}/>

      </Route>
      </Routes>
      </div>
    
    )
}
export default App