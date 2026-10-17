import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Products from './components/Products'
import Checkout from './components/Checkout'
import Cart from './components/Cart'
import Register from './components/Register'
import LoginPage from './components/LoginPage'
import { useEffect } from 'react'


function App() {

  useEffect(() => {
    // window.scrollTo(0, 0)

    // localStorage.removeItem('user')
    // localStorage.removeItem('token')

  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  )
}

export default App
