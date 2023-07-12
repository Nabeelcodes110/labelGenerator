import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Dashboard from './Dashboard';
import Analysis from './Analysis';
import CertificateAnalysis from './CertificateAnalysis';
import Navbar2 from './Navbar2';

function Home(props) {
  const {removeCookie , setProfile} = props
  const [product , setProduct] = useState({})
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<Dashboard removeCookie = {removeCookie} setProfile = {setProfile} setProduct = {setProduct}/>}></Route>
            <Route exact path='/analysis' element={<Analysis product = {product}/>}></Route>
            <Route exact path='/certificate' element={<CertificateAnalysis/>}></Route>
        </Routes>
      
    </div>
  )
}

export default Home
