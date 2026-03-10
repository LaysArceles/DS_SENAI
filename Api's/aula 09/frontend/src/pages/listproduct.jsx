import axios from 'axios'
import { useEffect, useState } from 'react'

function listproduct(){

    const [product,setProduct] = useState([])
    const navigate = useNavigate()
    const getProduct = async() =>{
        const Response = await axios.get('localhost:8080/Api/access')
        console.log(Response.data)
        SetUsers(Response.data)
    }
    const openlistproduct = (product)=>{
        navigate('/access',{state:{product}})
    }
    useEffect(()=>{
        getProduct();
    },[])
    return(
        <ul>
            {product.map(product=>(
                <li
                    key = {product.id}
                    onClick = {()=> openlistproduct(product)}
                    style={{cursor:'pointer', marginBottom:'8px' }}    
                    >{product.name}</li>
            ))}
        </ul>
    )
    




}
export default listproduct