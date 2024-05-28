
import React, { useEffect, useState } from 'react'
import axios from'axios';
import Crousel from '../Components/Crousel/Crousel';
import Card from '../Components/Card/Card';
import Search from '../Components/Search/Search';
import RingLoader from "react-spinners/RingLoader";

const Home = () => {
  const [data,Setdata]=useState([]);
  const [loading,Setloading]=useState(true);
  const fetchdata=async()=>{
    const response = await axios.get("https://fakestoreapi.com/products");
    if (response.status==200) {
      Setdata(response.data)
    } else {
      alert("error");
    }
  }
  useEffect(()=>{
    Setloading(true);
    setTimeout(() => {
      Setloading(false);
    }, 4000);
    fetchdata();
  },[])

  return (
    <div style={{ background: '#6b73e0' }}>
    <Search />
    {loading ? (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <RingLoader color="#36d7b7" size={150} loading={loading} aria-label="Loading Spinner" />
      </div>
    ) : (
      <>
        <Crousel />
        <h2 style={{textAlign:'center',marginTop:'510px' }}>Our Products</h2>
        <div className="card-contain">
          {data.map((data) => (
            <Card data={data} />
          ))}
        </div>
      </>
    )}
  </div>
);
  
}
export default Home;
