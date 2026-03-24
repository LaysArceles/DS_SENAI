import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
    // 1. Estados separados para cada campo
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // 2. Função de Registro
    const handleRegister = async () => {
        try {
            const res = await axios.post("http://localhost:8080/api/auth/register", {
                name: name,
                email: email,
                password: password
            });
            console.log("Registro realizado com sucesso:", res.data);
            alert("Conta criada com sucesso!");
        } catch (error) {
            console.error("Erro ao fazer register:", error);
            alert("Falha no registro. Verifique os dados ou se o e-mail já existe.");
        }
    }

    return (
        <>
            <nav>
                <div className="flex justify-between items-center w-full h-20 bg-blue-600 text-amber-50 px-20">
                    <span className="font-bold">
                        <Link to="/Home">
                            <button className="hover:text-blue-200 transition">Home</button>
                        </Link>
                    </span>
                    <div className="space-x-10">
                        <Link to="/login"><button className="hover:underline">Login</button></Link>
                        <Link to="/register"><button className="hover:underline text-blue-200">Register</button></Link>
                    </div>
                </div>
            </nav>

            <main className="h-screen bg-gradient-to-t from-blue-200 to-blue-400 flex justify-center pt-20">
                <div className="bg-white p-8 rounded-lg shadow-lg h-fit w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">Register</h2>

                    <div className="flex flex-col space-y-4">
                        {/* CAMPO NOME */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Name:</label>
                            <input
                                type="text"
                                className="w-full border p-2 rounded focus:outline-blue-400"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Seu nome completo"
                            />
                        </div>

                        {/* CAMPO EMAIL */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Email:</label>
                            <input
                                type="email"
                                className="w-full border p-2 rounded focus:outline-blue-400"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email@exemplo.com"
                            />
                        </div>

                        {/* CAMPO SENHA */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Password:</label>
                            <input
                                type="password"
                                className="w-full border p-2 rounded focus:outline-blue-400"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="******"
                            />
                        </div>

                        <button
                            onClick={handleRegister}
                            className="bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition mt-4"
                        >
                            Criar Conta
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Register;