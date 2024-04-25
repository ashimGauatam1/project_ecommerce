import React from 'react'
import './Card.css';
import { Link } from 'react-router-dom';
const Card = ({data}) => {
  return (
    <div>
        <div className='scard-body'>
       <div className="scard animate__animated animate__fadeIn" key={data.id}>
        <img src={data.image} alt="Product" class="product-image"></img>
          <h2 className="product-name">{data.title}</h2>
          <b><p className="product-price">${data.price}</p></b>
          <Link style={{"textDecoration":"none" }} className="see-more-button" to={`/singleproduct/${data.id}`}>See More</Link>
          
        </div>
        
    </div>
    </div>
  )
}

export default Card
