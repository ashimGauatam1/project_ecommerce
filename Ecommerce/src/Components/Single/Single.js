import React, { useState } from 'react'
import '../Single/Single.css'
import { Link } from 'react-router-dom';
const Single = ({data,handleclick}) => {

    const [count,setCount]=useState(1);
    const click=()=>{
        setCount(count+1);
      }
      const dclick=()=>{
        if(count==1)
        {
          alert("minimum quantity is 1")
          return;
        }
        setCount(count-1);
      }
  return (
    <div>
      <div className="product-container" key={data.id}>
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
    <div className="button-container">
  <button className="decrement-btn" onClick={dclick}>-</button>
  <span className="quantity">{count}</span>
  <button className="increment-btn" onClick={click}>+</button>
</div>
      <Link onClick={()=>handleclick(data,count)} style={{"textDecoration":"none" }} className="add-to-cart">Add to Cart</Link>
      <Link className="back" style={{"textDecoration":"none" }} to={"/"}>Back</Link>
    </div>
</div>
</div>
    </div>
  )
}

export default Single
