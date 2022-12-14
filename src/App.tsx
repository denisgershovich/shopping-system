import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Store from './pages/Store'
import SignUp from './pages/SignUp'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Footer from './components/Footer'
import Login from './pages/Login'

function App() {

  return <>
    <ShoppingCartProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>
  </>
}

export default App
