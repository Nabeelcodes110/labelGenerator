import React, { useState } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'

const Main = ()=>{
    let [profile,setprofile]=useState(false)// change this to false later
    
    return(<div className="container-fluid content-bg">{profile===false? (<Login setprofile={setprofile}/>):(<Dashboard />)}</div>)
        
}

export default Main;