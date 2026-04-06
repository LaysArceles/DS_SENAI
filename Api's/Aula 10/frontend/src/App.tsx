
import './App.css'
import Login from './pages/people/login'
import Home from './pages/home'
import Register from './pages/people/Registrer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegProduct from './pages/Product/registerProduct'
import PagProduct from './pages/Product/pagProduct'
import GetProducts from './pages/Product/getP'
import  UpdateProduct from './pages/Product/getP'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/register_Product" element={<RegProduct />} />
          <Route path='/create' element ={<PagProduct/>}/>
          <Route path='/acess' element ={<GetProducts/>}/>
          <Route path='/update/:id' element = {<UpdateProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
} export default App
