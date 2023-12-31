import React , {useState} from 'react'

function Navbar2(props) {
    const [dropdownvalue,setDropdownvalue] = useState('item_name')
    const [search,setSearch]=useState("")
    const [item,setitem]=useState([])

    const handleChange=(e)=>{
        setSearch(e.target.value)
    }

    const handleLogout = ()=>{
      props.setProfile(false)
      props.removeCookie("login")
      
    }
  return (
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
        </form>
          <button class="btn btn-outline-danger"  type="submit" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar2
