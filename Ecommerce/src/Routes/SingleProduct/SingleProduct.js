import React, { useEffect, useState } from 'react';
import {  Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../../Components/Card/Card';
import Single from '../../Components/Single/Single';
import Alert from '../../Components/Alert/Alert';

const SingleProduct = ({isauthenticated}) => {
  const [showalert,Setalert]=useState(false);  
  const [data,Setdata]=useState();
    const [newdata,newSetdata]=useState();
    
    let {id}=useParams();
    useEffect(()=>{
 
      const fetchData=async()=>{
            const response=await axios.get("https://fakestoreapi.com/products/"+ id);
           
            if(response.status==200)
            {
                Setdata(response.data);
            }
            else{
                Setalert(true);
            }
        }
        fetchData();
    },[id])
    const fetchdata=async()=>{
        const newresponse=await axios.get("https://fakestoreapi.com/products");
        if(newresponse.status==200)
        {
            newSetdata(newresponse.data);
        }
        else{
          Setalert(true);
        }
    }
    useEffect(()=>{
        fetchdata();
    },[])
    return (
    <div>
      {showalert && <Alert type="warning" message="Internal Server Error" onClose={()=>Setalert(false)}/>}
        {data && <Single data={data}  isauthenticated={isauthenticated}/>}
<div>
    
<div>
<h2 style={{textAlign:'center',marginTop:'10px' }}>You may also like</h2>
    <div className="card-contain">
  {
    newdata && newdata.map((data)=>{
      return (
        <>
          <Card data={data} />  
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
