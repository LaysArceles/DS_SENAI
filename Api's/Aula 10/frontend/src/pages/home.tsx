import { Link } from "react-router-dom"; // Don't forget this!
import Carrossel from "./carrosell";

const Home = () => {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center w-full h-20 bg-blue-600 text-amber-50 px-20">
          <span className="font-bold">
            <Link to="/">
              <button className="text-3xl hover:text-blue-200 transition">Home</button>
            </Link>
          </span>

          <div className="space-x-10">
             <Link to="/create"> <button   className="hover:text-blue-200 transition"> Product </button></Link>
            <Link to="/login">
              <button className="hover:text-blue-200 transition">Login</button>
            </Link>
            <Link to="/register">
              <button className="hover:text-blue-200 transition">Register</button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="h-screen  overflow-auto bg-gradient-to-t from-blue-200 to-blue-400">
        <div className="flex justify-center pt-10">
          <div className="w-full max-w-4xl"> 
             <Carrossel />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;