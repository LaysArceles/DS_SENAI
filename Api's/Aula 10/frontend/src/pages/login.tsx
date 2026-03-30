import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // 1. Importe o useNavigate
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:8080/api/auth/login", { email, password });
            sessionStorage.setItem(`token`, res.data.token)
            Swal.fire({
                title: "Success!",
                text: "Login realizado com sucesso",
                icon: "success"
            })
            navigate('/home')

        } catch {
            Swal.fire({
                title: "Erro!",
                text: "Não foi possível efetuar o login",
                icon: "error"
            })
        }
        setEmail(""),
            setPassword("")
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
                        <Link to="/login"><button>Login</button></Link>
                        <Link to="/register"><button>Register</button></Link>
                    </div>
                </div>
            </nav>

            <main className="h-screen bg-gradient-to-t from-blue-200 to-blue-400 flex justify-center pt-20">
                <div className="bg-white p-8 rounded-lg shadow-lg h-fit w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">Entrar</h2>

                    <div className="flex flex-col space-y-4">
                        <div>
                            <label className="block mb-1">Email:</label>
                            <input
                                type="email"
                                className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Password:</label>
                            <input
                                type="password"
                                className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={handleLogin}
                            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-bold">
                            Enviar
                        </button>

                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;