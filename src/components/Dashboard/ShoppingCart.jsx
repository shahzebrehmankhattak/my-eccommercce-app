import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../features/productSlice";
import "./Dashboard.css";
import arrow from "../../assets/arrow.png";
import masterCard from '../../assets/master.png'
import visaCard from '../../assets/visa.png'
import rupayCard from '../../assets/rupay.png'

const ShoppingCart = ({ setShowShoppingCart }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.items); 

  const [shippingCost] = useState(4);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal + shippingCost;

  const handleQuantityChange = (index, increment) => {
    const updatedItem = { ...cartItems[index], quantity: cartItems[index].quantity + increment };
    if (updatedItem.quantity < 1) updatedItem.quantity = 1;
  };

  const handleRemoveItem = (id) => {
    dispatch(deleteProduct(id)); 
  };

  return (
    <div className="shopping-cart">
      <div className="main-body">
        <div className="cart-section">
          <div className="return-box">
            <img
              src={arrow}
              alt="Back"
              onClick={() => setShowShoppingCart(false)}
            />
            <h2>Continue Shopping</h2>
          </div>
          <hr />
          <h2>Shopping Cart</h2>
          <p>You have {cartItems.length} item(s) in your cart</p>
          {cartItems.map((item, index) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(index, 1)}>+</button>
              </div>
              <div className="item-price">
                ${item.price}
              </div>
              <button
                className="remove-item"
                onClick={() => handleRemoveItem(item.id)}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
        <div className="payment-section">
          <h2>Card Details</h2>
          <div className="card-icons">
            <img src={masterCard} alt="MasterCard" />
            <img src={visaCard} alt="Visa" />
            <img src={rupayCard} alt="RuPay" />
          </div>
          <div className="payment-input-field">
            <label>Name on card</label>
            <input type="text" placeholder="Name" />
          </div>
          <div className="payment-input-field">
            <label>Card Number</label>
            <input type="text" placeholder="1111 2222 3333 4444" />
          </div>
          <div className="payment-input-group">
            <div className="payment-input-field">
              <label>Expiration date</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div className="payment-input-field">
              <label>CVV</label>
              <input type="text" placeholder="123" />
            </div>
          </div>
          <div className="payment-summary">
            <p>
            Subtotal <span>${subtotal ? subtotal.toFixed(2) : '0.00'} </span>
            </p>
            <p>
              Shipping <span>${shippingCost  ?  shippingCost.toFixed(2) : '0.00'}</span>
            </p>
            <p>
              <strong>Total (Tax incl.)</strong> <span>${total.toFixed(2)}</span>
            </p>
          </div>
          <button className="payment-checkout-button">
            ${total.toFixed(2)} Checkout →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
