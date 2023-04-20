import React from 'react'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/create' element={<Create />}/>
        <Route exact path='/read' element={<Read />}/>
        <Route exact path='/update' element={<Update />}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
