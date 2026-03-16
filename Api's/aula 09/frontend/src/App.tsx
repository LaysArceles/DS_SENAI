import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

interface product {
  _id: string
  name: string
  price: number
}


function App() {
  const [products, setProducts] = useState<product[]>([])

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8080/Api/access")
    setProducts(res.data.response)
  }
  useEffect(()=>{
    fetchData(); // chama a pagna assim que chamada
  },[])

  return (
    <>
    {
      products.map((product) => {
        return (
        <div key={product._id}>
            <span>{product.name}</span> 
            <br />
            <span>{product.price}</span>
        </div>

        )})
    }
      
    </>
  )
}

export default App
