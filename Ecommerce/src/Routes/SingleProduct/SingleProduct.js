import React, { useEffect, useState } from 'react';
import '../SingleProduct/Single.css';
import Navbar from '../../Components/Navbar/Navbar';
import {  Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../../Components/Card/Card';

const SingleProduct = () => {
    const [data,Setdata]=useState();
    const [newdata,newSetdata]=useState();
    const [count,setCount]=useState(0);
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
    const fetchdata=async()=>{
        const newresponse=await axios.get("https://fakestoreapi.com/products");
        if(newresponse.status==200)
        {
            newSetdata(newresponse.data);
        }
        else{
            alert("error while fetching data");
        }
    }
    useEffect(()=>{
        fetchdata();
    },[])
    const click=()=>{
      setCount(count+1);
    }
    const dclick=()=>{
      if(count<1)
      {
        alert("minimum quantity is 1")
      }
      setCount(count-1);
    }
    return (
    <div>
        <Navbar/>
        { data && (
      <div className="product-container">
  <div className="product-image">
    <img src={data.image} />
  </div>
  <div className='product-details'>
    <b>
    <p>Name:{data.title}</p>
    <p className="price">Price: ${data.price}</p>
    <p className="description">category: {data.category}</p>
    <p className="material">Rating: {data.rate}</p>
    <fieldset className="rating">
    <input type="radio" id="star5" name="rating" value="5"/><label htmlFor="star5"></label>
    <input type="radio" id="star4" name="rating" value="4"/><label htmlFor="star4"></label>
    <input type="radio" id="star3" name="rating" value="3"/><label htmlFor="star3"></label>
    <input type="radio" id="star2" name="rating" value="2"/><label htmlFor="star2"></label>
    <input type="radio" id="star1" name="rating" value="1"/><label htmlFor="star1"></label>
</fieldset>

    <p className="description">Description:{data.description}</p></b>
    <div className="buttons">
    <div class="button-container">
  <button class="decrement-btn" onClick={dclick}>-</button>
  <span class="quantity">{count}</span>
  <button class="increment-btn" onClick={click}>+</button>
</div>
      <Link style={{"textDecoration":"none" }} to={`/add_cart/${data.id}?count=${count}` }className="add-to-cart">Add to Cart</Link>
      <Link className="back" style={{"textDecoration":"none" }} to={"/"}>Back</Link>
    </div>
</div>
</div>
)}
<div>
    
<div>
<h2 style={{textAlign:'center',marginTop:'10px' }}>You may also like</h2>
    <div className="card-contain">
  {
    newdata && newdata.map((newdata)=>{
      return (
        <>
          <Card data={newdata}/>
       
        </>
      )
    })
  }
</div>
    </div>
    
</div>
    </div>
  )
}

export default SingleProduct
