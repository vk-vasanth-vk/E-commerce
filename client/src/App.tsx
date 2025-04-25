import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Electronics from './pages/electronics/electronics'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App