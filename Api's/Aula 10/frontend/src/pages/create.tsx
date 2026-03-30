import { useEffect, useState } from 'react'
import React from 'react';
import axios from 'axios'

interface product {
  _id: string
  name: string
  price: number
}
interface button{
  lebals: string;
  onclick: (event:React.MouseEvent<HTMLButtonElement>) => void;
}
const buttonok: React.FC<button> = ({lebals, onclick}) => {
  return (
    <button type='button' onClick={onclick} className='register'>
      {lebals}
    </button>
  )
}
function createproduto(){
     const [create, setCreate] = useState<product[]>([])
    
      const Add = async () => {
        const req = await axios.post("http://localhost:8080/Api/add")
        setCreate(req.request)

      }
      useEffect(()=>{
        Add(); // chama a pagna assim que chamada
      },[])
      return(
        <>
        
        
        </>

    )


}
export default createproduto