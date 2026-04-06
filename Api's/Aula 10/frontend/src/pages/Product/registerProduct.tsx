import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const RegProduct = () => {
    const [name, setName] = useState("");
    const [description, setDes] = useState("");
    const [price, setPrice] = useState<number>();
    const [stock, setStock] = useState<number>();
    const [category, SetCat] = useState("");
    const [image, setImage] = useState("");

    const handleRegister = async () => {
        try {

            await axios.post("http://localhost:8080/Api/add", { name, description, price, stock, category, image })
            Swal.fire({
                title: "Success!",
                text: "Product successfully registered",
                icon: "success"
            })
        } catch {
            Swal.fire({
                title: "Erro!",
                text: "The product could not be registered.",
                icon: "error"
            })
        }
        setName(""),
            setDes(""),
            setPrice(0),
            setStock(0),
            setImage(""),
            SetCat("");
    }
    useEffect(()=>{
        console.log(price,stock)
    },[price,stock])

    return (
        <>
            <div className="h-screen w- screen">
                <nav>
                    <div className="flex justify-between items-center w-full h-20 bg-blue-600 text-amber-50 px-10">
                        <span>
                            <Link to="/create">
                                <button className="text-3xl font-bold">Produtos</button>
                            </Link>
                        </span>
                    </div>
                </nav>
                <main className="h-screen bg-gratient-to-t from-blue-200 to-blue-400 flex justify-center pt-20">
                        <div className="bg-white p-8 rounded-lg shadow-lg h-fit w-full max-w-md">
                            <h2 className="text-2xl front-bold mb-6 text-blue-600 text-center">Register Product</h2>

                            <div className=" flex flex-col space-y-4">
                                <div>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product name"
                                        className="w-full border p-2 rounded focus:outline-blue-400" />
                                </div>
                                <div>
                                    <input type="text" value={description} onChange={(e) => setDes(e.target.value)} placeholder="Product description"
                                        className="w-full border p-2 rounded focus:outline-blue-400" />
                                </div>
                                <div>
                                    <input type="number"  onChange={(p) => setPrice(Number(p.target.value))} placeholder="Product price"
                                        className="w-full border p-2 rounded focus:outline-blue-400" />
                                </div>
                                <div>
                                    <input type="number" value={stock} onChange={(e) => setStock(Number(e.target.value))} placeholder="Stock"
                                        className="w-full border p-2 rounded focus:outline-blue-400" />
                                </div>
                                <div>
                                    <input type="text" value={category} onChange={(e) => SetCat(e.target.value)} placeholder="category"
                                        className="w-full border p-2 rounded focus:outline-blue-400" />
                                </div>
                                <div>
                                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="URL image"
                                        className="w-full border p-2 rounded focus:outline-blue-400" />
                                </div>
                                <button
                                    onClick={handleRegister}
                                    className="bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition mt-4"
                                >
                                    create Product
                                </button>
                            </div>
                        </div>
                </main>
            </div>
        </>
    )
}
export default RegProduct