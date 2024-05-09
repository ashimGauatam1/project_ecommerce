
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

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return savedCart;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
    const handleclick=(data, count)=>{
      const isPresent = cart.some(product => product.id === data.id);
  
      if (isPresent) {
        alert("Product is already added");
      } else {
        const productWithCount = { ...data, quantity: count };
        setCart([...cart, productWithCount]);
      }
    }
  return (
    <BrowserRouter>
    <Navbar size={cart.length}/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path='/verify' element={<Verify/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/singleproduct/:id' element={<SingleProduct handleclick={handleclick}/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/jwelery' element={<Jwelery/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
      <Route path='/add_cart' element={<Cart cart={cart} setCart={setCart} />}/>
    </Routes>
    
  <Footer/>
    </BrowserRouter>
  );
}

export default App;
