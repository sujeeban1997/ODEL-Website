import { Routes, Route, BrowserRouter} from 'react-router-dom';
import React from 'react'

import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';

import Home from './Pages/Home.jsx';

import Deals from './Pages/Deals.jsx';
import Products from './Pages/Products.jsx';
import './App.css';
import NewCollection from './Components/NewCollection.js';
import Mens from './Pages/Mens.jsx';

// import 

function App() {
    
  return (
    <div className="App">

{/*================================= Navbar Section  =======================================*/}
    <Navbar />

            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/Deals" element={<Deals />} />
                <Route path="/NewCollection" element={<NewCollection />} />
                <Route path="/Mens" element={<Mens />} />
    
            </Routes>
 
{/*================================= Navbar Tab Section =======================================*/}
    <Footer />

    </div>
  );
}


export default App;
