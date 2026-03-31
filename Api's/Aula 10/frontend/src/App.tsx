
import './App.css'
import Login from './pages/login'
import Home from './pages/home'
import Register from './pages/Registrer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegProduct from './pages/registerProduct'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register_Product" element={<RegProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
} export default App
