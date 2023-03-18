import React from 'react'
import Contact from './Contact'
import About from './About'
import Services from './Services'
import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
<BrowserRouter>
<Navbar/>

<Routes>

<Route exact path='/' element={<Home/>}/>
<Route exact path='/Services' element={<Services/>}/>
<Route exact path='/About' element={<About/>}/>
<Route exact path='/Contact' element={<Contact/>}/>
<Route path="*" element={<Navigate to='/' replace />} /></Routes>


</BrowserRouter>



  );
}

export default App
