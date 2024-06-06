
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../src/Routes/Home';
import Signup from './Routes/Signup/Signup';
import Login from './Routes/Login/Login';
import About from './Routes/About/About';
import Contact from './Routes/Contact/Contact';
import Footer from './Components/Footer/Footer';
import SingleProduct from './Routes/SingleProduct/SingleProduct';
import Men from './Routes/Category/Men';
import Women from './Routes/Category/Women';
import Jwelery from './Routes/Category/Jwellery';
import Electronics from './Routes/Category/Electronics';
import Cart from './Routes/Cart/Cart';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Verify from './Routes/verification/Verify';
import Alert from './Components/Alert/Alert';
import axios from 'axios';

function App() {
  const [authToken,SetauthToken]=useState(null);
  const [cart, setCart] = useState({
    user_id:"",
    product_id:"",
  })

  useEffect(() => {
    const token=localStorage.getItem('authToken');
    console.log(token);
    if(token){
      SetauthToken(token);
    }
  }, []);
    const handleclickdata=async(data, count)=>{
      const isPresent = cart.some(product => product.id === data.id);
  
      if (isPresent) {
        alert("Product is already added");
      } else {
        const response =axios.post("http://localhost:8080/cart/cartproduct",{
        product_id: data.id,
        user_id: "6654a35ac3f518f66d55437d", 
        count: count 
    });
          // const productWithCount = { ...data, quantity: count };
          setCart([...cart, productWithCount]);
        }
      
    }
    // const handlelogin=(token)=>{
      SetauthToken(token);
    }
    
    const handlelogout=()=>{
      SetauthToken(null);
      localStorage.removeItem('authToken');

    }
    setTimeout(()=>{
      handlelogout();
    },24*60*60*1000)
    
    const isauthenticated=!!authToken;
  return (
    <BrowserRouter>
    <Navbar size={cart.length} isauthenticated={isauthenticated} handlelogout={handlelogout} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path='/verify' element={<Verify />}/>
      <Route path='/login' element={<Login onLogin={handlelogin} />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/singleproduct/:id' element={<SingleProduct handleclickdata={handleclickdata} isauthenticated={isauthenticated}/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/jwelery' element={<Jwelery/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
      <Route path='/add_cart' element={<Cart cart={cart} setCart={setCart} isauthenticated={isauthenticated}/>}/>
    </Routes>
    
  <Footer/>
    </BrowserRouter>
  );
}

export default App;
