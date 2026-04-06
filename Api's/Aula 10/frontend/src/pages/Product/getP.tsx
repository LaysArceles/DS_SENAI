import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { assert } from "console";

interface Product {
    id: string
    name: string
    stock: number
    price: number
}

const GetProducts = () => {
    const [products, setProducts] = useState<Product[]>([])
    const navigate = useNavigate();

    const fetchData = async () => {
        const response = await axios.get("http://localhost:8080/Api/access")
        setProducts(response.data.response)
    }
    
    const UpdateProduct = async (_id: string) => {
        return navigate(`/update/${_id}`)
    }

    const deleteProduct = async (_id: string) => {
        await axios.delete(`http://localhost:8080/Api/remove/${_id}`)
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="min-h-screen  flex flex-col items-center justify-center p-6">

            <div className="w-full max-w-4xl">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">
                        List Products
                    </h1>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                    <table className="w-full text-sm text-left text-gray-600">

                        <thead className="text-xs text-gray-500 uppercase bg-gray-100">
                            <tr>
                                <th className="px-6 py-4">Nome</th>
                                <th className="px-6 py-4">Qtd</th>
                                <th className="px-6 py-4">Preço</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((product) => (
                                <tr
                                    key={product.id}
                                    className="border-b last:border-none hover:bg-gray-50 transition"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-800">
                                        {product.name}
                                    </td>

                                    <td className="px-6 py-4">
                                        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">
                                            {product.stock}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 font-medium text-gray-700">
                                        {product.price.toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        })}
                                    </td>
                                    <td className="px-6 py-4 font-medium">
                                        <button className="rounded-sm p-2 bg-red-600 text-white mx-4" onClick={() => deleteProduct(product._id)}>Delet</button>
                                        <button className="rounded-sm p-2 bg-blue-600 text-white mx-4" onClick={()=> UpdateProduct(product._id)}>Update</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                    {products.length === 0 && (
                        <div className="text-center py-10 text-gray-400">
                            No products found
                        </div>
                    )}
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => navigate('/register_Product')}
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 hover:scale-105 transition">
                        New Product
                    </button>
                </div>

            </div>
        </div>
    )
}
export default GetProducts