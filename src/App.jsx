import { useState } from 'react'
import MainContent from './components/MainContent'


function App() {
  const [active, setActive] = useState('taches')

  return (
    <div className="w-full mx-auto h-screen overflow-hidden">
      <MainContent active={active} setActive={setActive}/>
    </div>
  )
}

export default App
