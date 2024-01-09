import { useState, useEffect } from "react"
import { SingleProduct } from "./SingleProduct";
import styles from  './singleProduct.module.css';


export const ShowSingleProduct = () => {
    const [singleProduct, setSingleProduct] = useState([]); 
    const productId = 1;
    useEffect(() => {
      const fetchSingleProduct = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:3333/products/${productId}`);
          const data = await response.json();
          setSingleProduct(data); 
        } catch (error) {
          console.error('Error fetching single product:', error);
        }
      };
  
      fetchSingleProduct();
    }, [productId]);
  
    return (
      <div>
        {singleProduct.length > 0
        ? (
          <div className={styles.showOneProduct}>
        {singleProduct.map((product) => (
            <SingleProduct key={product.id} {...product}/>
        ))}</div>)
        : (
            <p>Loading...</p>
         )}
       </div>
    );
  };