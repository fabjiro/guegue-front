import { Route, Routes } from 'react-router-dom'
import { ShellRoute } from './presentation/screens/shell/ShellRoute'

function App() {

  return (
    <div className='h-screen w-screen'>
      <Routes>
        <Route element={<ShellRoute />} path="/*" />
      </Routes>
    </div>
  )
}

export default App
