import {} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Results from './Pages/Results';
import './App.css'


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/results" element={<Results />}/>
      </Routes>
    </Router>
  )
}

export default App
