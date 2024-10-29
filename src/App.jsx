import {} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Results from './Pages/Results';
import './App.css'
import HospitalDetails from './Pages/HospitalDetails';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/results" element={<Results />}/>
        <Route path='/hospital/:id' element={<HospitalDetails />}/>
      </Routes>
    </Router>
  )
}

export default App
