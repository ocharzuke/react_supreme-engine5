import React from "react";

const ProductCard = (props) => {
  const handleAddToCart = () => {
    alert("Added to Cart!");
  };

  return (
    <div className="card shadow-sm">
      <img
        src={props.imageUrl}
        className="card-img-top"
        alt={props.productName}
      />
      <div className="card-body">
        <h5 className="card-title">{props.productName}</h5>
        <p className="card-text">{props.productDescription}</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-body-secondary">${props.price}</small>
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Details
            </button>
            <button
              type="button"
              onClick={handleAddToCart}
              className="btn btn-sm btn-outline-danger"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
