import React, { useEffect, useState , useRef } from "react";
import { user } from "./Login";
import ItemSearched from "./ItemSearched";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Analysis from './Analysis';
import CertificateAnalysis from './CertificateAnalysis';
import { useCookies } from 'react-cookie';
import Navbar2 from './Navbar2';



const Dashboard = (props)=>{
  
  const [cookies, setCookie , removeCookie] = useCookies(['user']);
  const [dropDown , setDropDown] = useState([{"value" : "item_name" , "name" : "Item Name"} , {"value" :"cas_number" , "name" :"CAS Number"} ,{"value" : "part_number" , "name" :"Part Number"}])
  const [dropdownvalue,setDropdownvalue] = useState(dropDown[0].value)
  const [search,setSearch]=useState("")
  const [item,setitem]=useState([])
  const [product , setProduct] = useState({})

  const handleChange=(e)=>{

      setSearch(e.target.value)

  }

  const handleLogout = ()=>{
    removeCookie("login")
    props.setProfile(false)
    console.log(props.profile.current)
    
  }

  useEffect(()=>{
    setDropDown([{"value" : "item_name" , "name" : "Item Name"} , {"value" :"cas_number" , "name" :"CAS Number"} ,{"value" : "part_number" , "name" :"Part Number"}])

    const getitemarray =async ()=>{

      const responsestore = await fetch("http://localhost:4000/api/v1/search",{
          method:'GET',
          headers:{
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            },   
      
          })
          .catch((err)=>console.log(err))

          const message = await responsestore.json()
          setitem(message.data)

          if(!message.success==true){
              
            alert("not able to access item")
          
          }
    }
    getitemarray()
          
  },[dropdownvalue])
  return (
      <div>
    
          {user.Username}

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Logo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Search By
                </a>
                <ul class="dropdown-menu">
                  {
                    dropDown?.map((d)=>{
                      return (
                        <li><a onClick={()=>setDropdownvalue(d.value)} class="dropdown-item" >{d.name}</a></li>
                      )
                    })
                  }  
                </ul>
              </li>
              
            </ul>
            <form class="d-flex" role="search">
              <input onChange={handleChange} value={search} class="form-control me-2" type="search" placeholder={"Search   "+dropdownvalue} aria-label="Search" />
            </form>
              <button class="btn btn-outline-danger"  type="submit" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>
      <Routes>
          <Route exact path='/' element={<ItemSearched dropvalue={dropdownvalue} searchvalue={search} item={item} setProduct = {setProduct}/>}></Route>
          <Route exact path='/analysis' element={<Analysis product = {product} setDropDown = {setDropDown} setProduct = {setProduct}/>}></Route>
          <Route exact path='/certificate' element={<CertificateAnalysis product = {product}/>}></Route>
      </Routes>


      </div>
  )
}

export default Dashboard;