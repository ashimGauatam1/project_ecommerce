import React, { useEffect, useState } from 'react';
import '../Cart/Cart.css';
import {  Link, useNavigate } from 'react-router-dom';
import Alert from '../../Components/Alert/Alert';
import axios from 'axios';

const Cart = ({length,authToken,isauthenticated}) => {
    const navigate=useNavigate();
    const [cart,Setcart]=useState([]);
    let [cards,Setcards]=useState();
    const [showalert,Setalert]=useState(false);
    const removeFromCart = async(productId) => {
    console.log(productId)
    const response=await axios.delete("http://localhost:8080/cart/cart/"+productId);
    if(response.status==200){
      window.location.reload();
    }
    else{
      alert("error");
    }
  };
  
  useEffect(()=>{
    const fetchcart=async()=>{
      try {
        const cart_response=await axios.get('http://localhost:8080/cart/display',{
          headers: { 'auth-token': authToken }
        });

        if(cart_response.status==200){
          Setcart(cart_response.data);
          
        }
        else{
          alert("error");
        }
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchcart();
  },[authToken]);
  if(cart.length==0){
   cards=1;
  }
 
  return (
    <div>
      {!isauthenticated?
        showalert && <Alert type="danger" message="You are Not Logged In Please Login .If you are new then kindly Register " onClose={() => Setalert(false)}/>
        :
        (cards?
          <>
           <Alert type="danger" message="Your cart is Empty....." onClose={() => Setalert(false)}/> 
           <img src="https://static.vecteezy.com/system/resources/previews/008/515/488/non_2x/empty-cart-flat-illustration-concept-vector.jpg" style={{height:'529px',width:'800px',position:'relative',left:'250px',top:'-9px'}}/>
          </>
          :
       <>
      <div className="cart-container">
        <h1>Your Items</h1>
        { cart.map(product => (
          
          <div className="cart-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p className="price">Price: ${product.price}</p>
              <p className='price'>Number Of Quantity:{product.count}</p>
              <li>
                <button className="btn-remove" onClick={() => removeFromCart(product._id)}>Remove</button>
              </li>
            </div>
          </div>
        ))}
          { length(cart.length)}
        <div className='total'>
          <div className='text-style' >Order Summary</div>
          <p style={{fontWeight:'bolder',marginTop:'10px',marginBottom:'20px'}}>Sub total : ${cart.reduce((total, product) => total + (product.price * product.count), 0)}</p>
          <p>Delivery Charge: According to your Location</p>
          <Link to={"/checkout"} className='btn-checkout'>Checkout</Link>
        </div>
      </div>
       </>
)      }
      
    </div>
  );z
};

export default Cart;
