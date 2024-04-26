import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import '../Cart/Cart.css';
import axios from 'axios';
import { Link, useLocation, useParams } from 'react-router-dom';
const Cart = () => {
    const [data,Setdata]=useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const count = parseInt(searchParams.get('count')) || 0; 
    let {id}=useParams();
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await axios.get("https://fakestoreapi.com/products/"+ id);
            console.log(response);
            if(response.status==200)
            {
                Setdata(response.data);
            }
            else{
                alert("sorry error while fetching data");
            }
        }
        fetchData();
    },[])
  return (
    <div>
      <Navbar/>
      <div className="cart-container">
  <h1>Your Items</h1>
  <div className="cart-item" key={data.id}>
  <img src={data.image} alt="Product 1"/>
  <div className="product-details">
    <h2>{data.title}</h2>
    <p>{data.description}</p>
    <p className="price">Price:  ${data.price}</p>
    <p className='price' > Number Of Quantity:  {count}</p>
    <li>
    <button className="btn-buy">Buy Now</button>
    <button className="btn-remove">Remove</button>
    </li>
  </div>
</div>
<div className='total'>
    <p ><div style={{fontWeight:'bold',fontSize:'20px',textAlign:'center',marginBottom:'20px'}}>Order Summary</div>
    <p>Sub total :      ${data.price*count}</p>
    <p>Delivery Charge:     According to your Loaction</p>
    <Link to={"/checkout"} className='btn-checkout'>Checkout</Link>
</p>
</div>
    </div>
    </div>
  )
}

export default Cart
