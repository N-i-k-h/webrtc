import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home'

import RoomPage from './Room/index.jsx' 
function App() {
  

  return (
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/room/:roomId" element={<RoomPage />} />
    </Routes>
  )
}

export default App


