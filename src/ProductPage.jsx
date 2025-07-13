import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/products.json");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="container-fluid px-5 py-5 bg-body-tertiary">
        <h1>Our Products</h1>
      </div>
      <div className="album py-3 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {products.map((product) => (
              <div key={product.id} className="col">
                <ProductCard
                  imageUrl={product.image}
                  productName={product.name}
                  price={product.price.toFixed(2)}
                  productDescription={product.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
