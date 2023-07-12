import React, { useEffect, useRef, useState , createContext } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { useCookies } from 'react-cookie';



const Main = ()=>{
    const [cookies, setCookie , removeCookie] = useCookies(['user']);
    const [profile , setProfile] = useState(false)
    const UserContext = createContext()

    return(
        <>
        <UserContext.Provider value={profile}>
        {!cookies.login ?
        (<Login setProfile =  {setProfile}/>)
        :(<Dashboard setProfile =  {setProfile}/>)}
        </UserContext.Provider>
        </>
        )
        
}

export default Main;
