import './App.css'
import Navbar from './components/Navbar'
import GridLayout from './components/GridLayout'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 flex items-center justify-center">
        <h1 className='text-4xl font-bold'>Company Name</h1>
      </div>
      <GridLayout className='w-full' />
      <Footer />
    </>
  )
}

export default App