import axios from "axios";
import { useEffect, useState } from "react";
interface user{
    _id:string
    email:string
    password:string

}

 const Login = () => {
    const [login, setLogin] = useState<user[]>([])

    const fetchData = async() => {
        const res = await axios.post("localhost:8080/api/auth/login")
        setLogin(res.data.response.email)
    }
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <>
        {
            login.map((user)=>{
                return (
                    <div key={user._id}>
                        <span>Email: </span>
                        <input type="text" />
                        <span>Password: </span>
                        <input type="text"/>
                        <button> at sende</button>

                    </div>
                )
            })
        }


        </>
    )


}
export default Login;