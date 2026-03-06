import { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import Entete from './components/header'

function App() {
  const [active, setActive] = useState('taches')

  return (
    <div className="w-full mx-auto h-screen overflow-hidden">
      {/* <Entete active={active} setActive={setActive} />
      <Sidebar active={active} 
      setActive={setActive}
      tacheCount={3}/> */}
      <MainContent active={active} setActive={setActive}/>
    </div>
  )
}

export default App
