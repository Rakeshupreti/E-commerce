import logo from "./logo.svg";
import "./App.css";
import Socialize from "./components/Socialize";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Shop from "./Shop";
import Login from "./Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./Product";
import Register from "./Register";
import Category from "./Category";
import Categorylist from "./Categorylist";
import Productlist from "./Productlist";
import Cart from "./Cart";
import axios from "axios";

function App() {
   let isLoggedIn = localStorage.getItem('isLoggedIn');
   console.log(isLoggedIn, "is logged in");
   const logout =() => {
     window.localStorage.removeItem('isLoggedIn');
     window.location.reload();
   }
  return (

      <BrowserRouter>
      <div className="navbar p-5">
        <div>
           <h2>Furnicture Store</h2>
        </div>
        <div className="navbarright">
        <Link to='/'>
      <button type="button" className="btn btn-info btn-outline-dark">Home</button>
      </Link>
      <Link to='/shop'>
      <button type="button" className="btn btn-info btn-outline-dark">Shop</button>
      </Link>
      <Link to='/About'>
      <button type="button" className="btn btn-info btn-outline-dark">About</button>
      </Link>
      <Link to='/Contact'>
      <button type="button" className="btn btn-info btn-outline-dark">Conatact</button>
      </Link>
      <button onClick={logout} >
        logout
      </button>
          {/* <Link className="navbarright" to="/">Home</Link>
          <Link className="navbarright" to="/shop">Shop</Link>
          {/* <a href="">Shop</a> */}
          {/* <Link className="navbarright" to="/about">About</Link>
          <Link className="navbarright" to="/contact">Contact</Link> */}
        </div>
      </div>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={isLoggedIn ? <Shop /> : <Login/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/categorylist" element={<Categorylist/>}/>
          <Route path="/productlist" element={<Productlist/>}/>
          <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
      
   
  );
}

export default App;
