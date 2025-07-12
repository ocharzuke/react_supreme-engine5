import React from "react";
import ProductCard from "./ProductCard";

export default function LandingPage() {
  return (
    <>
      <body>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <ProductCard
                  imageUrl="https://picsum.photos/id/486/300/200"
                  productName="Typewriter-themed Set"
                  price="19.99"
                  productDescription="Beautiful typewriter themed"
                />
              </div>
              <div className="col">
                <ProductCard
                  imageUrl="https://picsum.photos/id/508/300/200"
                  productName="Architecture-themed Set"
                  price="25.99"
                  productDescription="Featuring only beautiful concrete"
                />
              </div>
              <div className="col">
                <ProductCard
                  imageUrl="https://picsum.photos/id/401/300/200"
                  productName="Hot Air Balloon-themed Set"
                  price="28.99"
                  productDescription="Dreamy vibes amidst floating clouds only"
                />
              </div>
              <div className="col">
                <ProductCard
                  imageUrl="https://picsum.photos/id/287/300/200"
                  productName="Mountain-themed Set"
                  price="30.99"
                  productDescription="For those who dream of high places"
                />
              </div>
              <div className="col">
                <ProductCard
                  imageUrl="https://picsum.photos/id/318/300/200"
                  productName="Famous Landmarks-themed Set"
                  price="40.99"
                  productDescription="Iconic and recognisable motifs"
                />
              </div>
              <div className="col">
                <ProductCard
                  imageUrl="https://picsum.photos/id/213/300/200"
                  productName="Seascapes-themed Set"
                  price="55.99"
                  productDescription="All you water babies out there let's splash"
                />
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
