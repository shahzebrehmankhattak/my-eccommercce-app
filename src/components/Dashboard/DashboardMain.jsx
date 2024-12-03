import React,{useState} from 'react';
import Sidebar from './SideBar';
import Banner from './Banner';
import ProductCard from './ProductCard';
import { products } from './mockData';
import ShoppingCart from './ShoppingCart';
import './Dashboard.css';

const Dashboard = () => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const handleAddToCart = () => {
    setShowShoppingCart(true);
  };

  return (
    <div className="dashboard">
    <Sidebar />
    <div className="main-content">
      {!showShoppingCart && (
        <>
          <div className='add-to-cart-btn'>
            <button onClick={() => setShowShoppingCart(true)}>Add to Cart</button>
          </div>
          <Banner />
          <div className="products-grid">
            {products.map(product => (
              <ProductCard
                key={product.id}
                {...product}
                setShowShoppingCart={setShowShoppingCart}
              />
            ))}
          </div>
        </>
      )}

      {showShoppingCart && <ShoppingCart
      
      setShowShoppingCart={setShowShoppingCart}
      
      />}
    </div>
  </div>
  );
};

export default Dashboard;
