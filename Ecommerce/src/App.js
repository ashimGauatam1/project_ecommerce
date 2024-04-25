
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

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/jwelery' element={<Jwelery/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
    </Routes>
    
  <Footer/>
    </BrowserRouter>
  );
}

export default App;


//  const [data, setData] = useState([]);

//   const fetchData = async () => {
    
//       const response = await axios.get("http://127.0.0.1:8000/api/student/");
//       if (response.status === 200) {
//         setData(response.data);
//         console.log(response.data);
//       } else {
//         alert("Error");
      
//     } 
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

/* <div className="App">
      <h1>Student Data</h1>
      {
        data.map((student,i)=>{
          return (
            <h4 key={i}>{student.student_name} {student.email}  </h4>
          )
        })
      }      
    </div> */