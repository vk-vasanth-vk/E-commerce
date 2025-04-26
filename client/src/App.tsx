import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SecondaryNavbar from './components/SecondaryNavbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Electronics from './pages/categories/electronics'
import ProductDetails from './pages/ProductDetails'
import CartDetails from './pages/CartDetails'
import SignUp from './pages/SignUp'
import Checkout from './pages/Checkout'
import OrderDetails from './pages/OrderDetails'
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login'
import Beauty from './pages/categories/beauty'
import Fashion from './pages/categories/fashion'
import Books from './pages/categories/books'
import Grocery from './pages/categories/grocery'
import Toys from './pages/categories/toys'
import HomeAppliances from './pages/categories/home-appliances'
import Sports from './pages/categories/sports'
import OrderConfirmation from './pages/order-confirmation'

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

const SecondaryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SecondaryNavbar />
      {children}
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth routes without Navbar and Footer */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path='/checkout' element={
          <SecondaryLayout>
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          </SecondaryLayout>
        } />

        <Route path='/order-confirmation' element={
          <SecondaryLayout>
            <ProtectedRoute>
              <OrderConfirmation />
            </ProtectedRoute>
          </SecondaryLayout>
        } />

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
        <Route path="/beauty" element={
          <MainLayout>
            <Beauty />
          </MainLayout>
        } />
        <Route path="/fashion" element={
          <MainLayout>
            <Fashion />
          </MainLayout>
        } />
        <Route path="/books" element={
          <MainLayout>
            <Books />
          </MainLayout>
        } />
        <Route path="/grocery" element={
          <MainLayout>
            <Grocery />
          </MainLayout>
        } />
        <Route path="/toys" element={
          <MainLayout>
            <Toys />
          </MainLayout>
        } />
        <Route path="/home-appliances" element={
          <MainLayout>
            <HomeAppliances />
          </MainLayout>
        } />
        <Route path="/sports" element={
          <MainLayout>
            <Sports />
          </MainLayout>
        } />

        <Route path="/product-details/:id" element={
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        } />
        <Route path="/cart-details" element={
          <MainLayout>
            <ProtectedRoute>
              <CartDetails />
            </ProtectedRoute>
          </MainLayout>
        } />
        <Route path='/orders' element={
          <MainLayout>
            <ProtectedRoute>
              <OrderDetails />
            </ProtectedRoute>
          </MainLayout>
        } />
      </Routes>
    </Router>
  )
}

export default App