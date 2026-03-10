import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter,Link,Routes,Route} from 'react-router-dom'

function App() {
  const [products, setProducts] = useState<any>([])

  const fetchData = async () => {
    const data = await axios.get("localhost:8080/Api/access")
    setProducts(data)
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
      <BrowserRouter>
      <nav>
        <Link to ="/"> Home </Link>
        <Link to = "/access"> Products </Link>
      </nav>
      <Routes>
        <Route path = "/" element = {<botoes/>}/>
        <Route path = "/access" element = {<listproduct/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
