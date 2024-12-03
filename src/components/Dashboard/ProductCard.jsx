import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../features/productSlice';
import './Dashboard.css';

const ProductCard = ({ id, image, name, price, setShowShoppingCart }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct({ id, name, price, image }));
    setShowShoppingCart(true); 
  };

  const StarRating = ({ rating }) => (
    <div style={{ color: 'gold' }}>
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} style={{ opacity: i < rating ? 1 : 0.3 }} />
      ))}
    </div>
  );

  return (
    <div className="product-card">
      <div className="img-box">
        <img src={image} alt={name} />
      </div>
      
      <div className="actions">
        <button className="btn1" onClick={handleAddToCart}>Add to Cart</button>
        <button className="btn2">Quick View</button>
      </div>
      
      <div className="name-box">
        <h3>{name}</h3>
        <div className="add-to-fav">
          <FaHeart className="heart-icon" />
          <span>${price}</span>
        </div>
      </div>
      
      <div className="rating-box">
        <p>Running</p>
        <StarRating rating={5} />
      </div>
    </div>
  );
};

export default ProductCard;
