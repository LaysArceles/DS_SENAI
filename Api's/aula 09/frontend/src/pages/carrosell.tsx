import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  name: string;
  image: string;
}

function Carrossel() {
  const [product, setProduct] = useState<Product[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8080/Api/access")
      .then(res => setProduct(res.data.response))
      .catch(err => console.error(err));
  }, []);

  const proximo = () => {
    setIndex((prev) => (prev + 1) % product.length);
  };

  const anterior = () => {
    setIndex((prev) =>
      prev === 0 ? product.length - 1 : prev - 1
    );
  };

  if (!product.length) {
    return <p>Carregando...</p>;
  }

  const p1 = product[index];
  const p2 = product[(index + 1) % product.length];
  const p3 = product[(index + 2) % product.length];

  return (
    <div className="text-center font-[cursive] text-[30px] text-white">

      <div className="flex justify-center items-center gap-4">

        <button onClick={anterior} className="bg-gray-800 px-3 py-2 rounded">
          ⬅
        </button>

        <img src={p1.image} className="w-48 h-32 object-cover rounded-lg" />

        <img src={p2.image} className="w-48 h-32 object-cover rounded-lg" />

        <img src={p3.image} className="w-48 h-32 object-cover rounded-lg" />

        <button onClick={proximo} className="bg-gray-800 px-3 py-2 rounded">
          ➡
        </button>

      </div>
    </div>
  );
}

export default Carrossel;