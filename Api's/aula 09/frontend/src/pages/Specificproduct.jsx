import { useLocation } from "react-router-dom"

export const Specificproduct = () =>
{
    const location = useLocation();
    const{product} = location.state || {};

    if (!product ) return <p> Nenhum produto Selecionando.</p>;

    return(
        <div>
            <h2>Product</h2>
            <p>Name: {product.name}</p>
            <p>Description:{product.description}</p>
            <p>Price:{product.price} </p>
            <p>Stock: {product.stock}</p>
            <p>Category:{product.category}</p>              
        </div>
    )
}