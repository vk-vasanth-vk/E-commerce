import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Electronics from './pages/electronics/electronics'
import ProductDetails from './pages/ProductDetails'
import CartDetails from './pages/CartDetails'
import SignUp from './pages/SignUp'
import Checkout from './pages/checkout'
import Orders from './pages/Orders'

// Layout wrapper component
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth routes without Navbar and Footer */}
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/login" element={<Login />} /> */}

        <Route path='/checkout' element={<Checkout />} />
        <Route path='/orders' element={<Orders />} />

        {/* Main routes with Navbar and Footer */}
        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />
        <Route path="/electronics" element={
          <MainLayout>
            <Electronics />
          </MainLayout>
        } />
        <Route path="/product-details" element={
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        } />
        <Route path="/cart-details" element={
          <MainLayout>
            <CartDetails />
          </MainLayout>
        } />
      </Routes>
    </Router>
  )
}

export default App