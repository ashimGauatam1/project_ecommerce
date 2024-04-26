
import React, { useEffect, useState } from 'react'
import axios from'axios';
import Navbar from '../Components/Navbar/Navbar'
import Crousel from '../Components/Crousel/Crousel';
import Card from '../Components/Card/Card';
import Search from '../Components/Search/Search';
const Home = () => {
  const [data,Setdata]=useState([])
  const fetchdata=async()=>{
    const response = await axios.get("https://fakestoreapi.com/products");
    if (response.status==200) {
      Setdata(response.data)
    } else {
      alert("error");
    }
  }
  useEffect(()=>{
    fetchdata();
  },[])
  return (
    <div style={{background:'#6b73e0'}}>
        <Navbar/><Search/>
        <Crousel/>
    <h2 style={{textAlign:'center',marginTop:'510px' }}>Our Products</h2>
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
export default Home;
