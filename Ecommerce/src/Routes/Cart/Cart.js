import React from 'react';
import '../Cart/Cart.css';
import {  Link, useNavigate } from 'react-router-dom';
import Alert from '../../Components/Alert/Alert';
import axios from 'axios';

const Cart = ({cart,setCart,isauthenticated}) => {
    const navigate=useNavigate();
  const removeFromCart = async(productId) => {
    const response=await axios.delete("http://localhost:8080/cart/cart/"+productId);
    if(response.data==200){
      navigate("/add_cart")
    }
    else{
      alert("error");
    }
  };
  return (
    <div>
      {!isauthenticated?
        <Alert type="danger" message="You are Not Logged In Please Login .If you are new then kindly Register "/>
      :
      <div className="cart-container">
        <h1>Your Items</h1>
        
        {cart.map(product => (
          <div className="cart-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p className="price">Price: ${product.price}</p>
              <p className='price'>Number Of Quantity:{product.quantity}</p>
              <li>
                <button className="btn-remove" onClick={() => removeFromCart(product.id)}>Remove</button>
              </li>
            </div>
          </div>
        ))}
        <div className='total'>
          <div className='text-style' >Order Summary</div>
          <p style={{fontWeight:'bolder',marginTop:'10px',marginBottom:'20px'}}>Sub total : ${cart.reduce((total, product) => total + (product.price * product.quantity), 0)}</p>
          <p>Delivery Charge: According to your Location</p>
          <Link to={"/checkout"} className='btn-checkout'>Checkout</Link>
        </div>
      </div>
      }
    </div>
  );
};

export default Cart;
