import React, { useEffect, useState } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { useCookies } from 'react-cookie';
import Home from './Home';



const Main = ()=>{
    const [cookies, setCookie , removeCookie] = useCookies(['user']);
    const [profile , setProfile] = useState(false)
    return(
        <>
    
        {!cookies?.login? 
        (<Login setProfile = {setProfile} cookies = {cookies} setCookie = {setCookie} />)
        :(<Home setProfile = {setProfile} cookies ={cookies} removeCookie = {removeCookie}/>)}
        </>
        )
        
}

export default Main;
