import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';
import Card from '../../Components/Card/Card';

const Men = () => {
  const [data,Setdata]=useState([]);
  const fetchdata=async()=>{
    const response=await axios.get("https://fakestoreapi.com/products/category/men's%20clothing");
    if(response.status==200)
    {
      Setdata(response.data);
    }
    else{
      alert("error while fetching data");
    }
  }
  useEffect(()=>{
    fetchdata();
  },[])
  return (
    <div>
      <Navbar/>
      <h2 style={{textAlign:'center',marginTop:'10px' }}>Our Products</h2>
    <div className="card-contain">
  {
    data.length>0 && data.map((data)=>{
      return (
        <>
          <Card data={data}/>
        </>
      )
    })
  }
  
  </div>
      </div>
  )
}

export default Men
