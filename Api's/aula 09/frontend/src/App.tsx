import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

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
    
    </>
  )
}

export default App
