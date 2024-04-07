import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Productpage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [productsData, setProductsData] = useState([])

  // Load cart items from localStorage on component mount
  useEffect(() => {
    fetch('http://localhost:5000/Products')
    .then(response => response.json())
    .then(data => setProductsData(data))
    .catch(error => console.error('Error fetching products:', error));

    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
  
    }
  }, []); 

  
  useEffect(() => {
    console.log("Productpage component rerendered");
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]); 

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = cartItems.map((item, index) => {
        if (index === existingItemIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        if (item.quantity === 1) {
          return null; 
        } else {
          return { ...item, quantity: item.quantity - 1 }; 
        }
      }
      return item;
    }).filter(item => item !== null); // Filter out null entries to remove removed items from cart

    console.log("Updated Cart Items:", updatedCartItems);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <Header />
      <table>
        <tbody>
          <tr>
            <td><ProductList products={productsData} onAddToCart={addToCart} /></td>
            <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} onRemove={removeFromCart} /></td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Productpage;