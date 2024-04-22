import './App.css'
import UserForm from './components/registration'
import NITHamirpurInfo from './components/info'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<UserForm />} />
    <Route path="/info" exact element={<NITHamirpurInfo />} />
    </Routes>
    
    </BrowserRouter>

  

    </>
  )
}

export default App
