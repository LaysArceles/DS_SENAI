import { useEffect, useState } from 'react'

import axios from 'axios'

interface product {
  _id: string
  name: string
  price: number
  image:string
}
function listproduct(){

    const [products, setProducts] = useState<product[]>([])

    const fetchData = async () => {
    const res = await axios.get("http://localhost:8080/Api/access")
    setProducts(res.data.response)
  }
  useEffect(()=>{
    fetchData(); // chama a pagna assim que chamada
  },[])

    return(
        <>
        {
            products.map((product) => {
                return (
                    <div key={product._id}>
                     <img src={product.image} alt={product.name}style={{ width: "200px", borderRadius: "10px" }}/>
                <span>{product.name}</span> 
                <br />
                <span>R$ {product.price}</span>
            </div>

            )})
        }
        </>
    )
    
}
export default listproduct