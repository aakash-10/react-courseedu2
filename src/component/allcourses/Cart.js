import React, { useContext } from 'react';
import { CourseContext } from './CourseContext';
import './Cart.css';

function Cart() {
  const { cartItems, addToCart, clearCart } = useContext(CourseContext);

  const handleClearCart = () => {
    clearCart(); 
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.courseName}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cartItems.length > 0 && (
        <>
          <p>Total: {cartItems.reduce((total, item) => total + item.price, 0)}</p>
          <button className="btn btn-primary" onClick={handleClearCart}>
            Clear Cart
          </button>
          <button className="btn btn-success">Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
