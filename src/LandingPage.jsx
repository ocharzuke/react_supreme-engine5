import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function LandingPage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get("/featured.json");
        setFeaturedProducts(response.data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const renderFeaturedProducts = () => {
    const productElements = [];
    for (const product of featuredProducts) {
      productElements.push(
        <div key={product.id} className="col-md-3 mb-4">
          <ProductCard
            id={product.id}
            imageUrl={product.image}
            productName={product.name}
            price={product.price.toFixed(2)}
            productDescription={product.description}
          />
        </div>
      );
    }
    return productElements;
  };

  return (
    <>
      <div className="album py-5 row">{renderFeaturedProducts()}</div>
    </>
  );
}
