import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";


const Product = () => {

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] =useState(true)
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
     setLoading(true)
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    setProducts(data);
    setLoading(false)
  };

 if(loading){
    return <Loading/>
 }
   
    const handleAdd = (product) =>{
       dispatch(add(product))
    }
  

  return (
    <div className="productsWrapper">
      {products?.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="img" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>

            <button onClick={() => handleAdd(product)} className="btn">Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
