import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='h-screen w-screen'>
      <Routes>
        <Route element={<div>pagina incial</div>} path="/" />
      </Routes>
    </div>
  )
}

export default App
