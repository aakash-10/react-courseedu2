import React, { createContext, useState } from 'react';

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (course) => {
    setCartItems((prevItems) => [...prevItems, course]);
  };

  const clearCart = () => {
    setCartItems([]); // Clear the cart by setting it to an empty array
  };

  return (
    <CourseContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CourseContext.Provider>
  );
};

export { CourseContext, CourseProvider };
