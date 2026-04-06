import { Link } from "react-router-dom"; // Don't forget this!
import GetProducts from "./getP"
const pagProduct = () => {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center w-full h-20 bg-blue-600 text-amber-50 px-10">
            <Link to="/">
            <h1 className="text-3xl font-bold"> Products </h1>
            </Link>

        </div>
      </nav>

      <main className="h-screen  overflow-auto bg-gradient-to-t from-blue-200 to-blue-400">
        <div className="flex justify-center  px-10">
          <GetProducts/>
        </div>
      </main>
    </>
  );
};

export default pagProduct;