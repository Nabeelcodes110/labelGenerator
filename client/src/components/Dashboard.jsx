import React, { useEffect, useState } from "react";
import { user } from "./Login";
import ItemSearched from "./ItemSearched";

const Dashboard = ()=>{

    const [dropdownvalue,setDropdownvalue] = useState('item_name')
    const [search,setSearch]=useState("")
    const [item,setitem]=useState([])

    const handleChange=(e)=>{

        setSearch(e.target.value)

    }

    useEffect(()=>{

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
            
    },[])


    return (
        <div>
            
            {user.Username}
            {user.Password}


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
            <li><a onClick={()=>setDropdownvalue('item_name')} class="dropdown-item" >Product Name</a></li>
            <li><a onClick={()=>setDropdownvalue('cas_number')} class="dropdown-item" >Cas Number</a></li>
            <li><a onClick={()=>setDropdownvalue('part_number')} class="dropdown-item" >Product Number</a></li>

            
          </ul>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input onChange={handleChange} value={search} class="form-control me-2" type="search" placeholder={"Search "+dropdownvalue} aria-label="Search" />
        <button class="btn btn-outline-success"  type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<ItemSearched dropvalue={dropdownvalue} searchvalue={search} item={item} />

        </div>
    )
}

export default Dashboard;