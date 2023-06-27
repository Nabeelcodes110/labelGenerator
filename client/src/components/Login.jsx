import React , { useEffect, useState }from "react";

let user = {Username:"",Password:""};

const Login = (props)=>{

    const [userinfo, setuserinfo]=useState({Username:"",Password:""})
    const [formerror,setformerror]=useState({})
    const [isSubmit , setisSubmit]=useState(false)

    function handleChange(event){
        const {name,value}=event.target;
       setuserinfo(()=>{
        return {
            ...userinfo,
            [name]:value
        }
    });
}

   const handleSubmit=(e)=>{
    e.preventDefault()
    setformerror(validate(userinfo))
    setisSubmit(true)

   }

   const validate =(userinfo)=>{
    const errors={};
    
    if(!userinfo.Username){
        errors.Username = "Username is required!"
    }
    if(!userinfo.Password){
        errors.Password = "Password is required!"
    }

 return errors
   }

   function handleClick(){

    async function CheckUser(){
        const responsestore = await fetch("http://localhost:4000/api/v1/login",{
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
              },   
              body: new URLSearchParams({
                
                'Username': userinfo.Username,
                'Password': userinfo.Password,
                
                
            })
          })
          .catch((err)=>console.log(err))

          const message = await responsestore.json()

        if(message.auth==true){
            user.Username=userinfo.Username;
            user.Password=userinfo.Password;
            props.setprofile(true);
        }else{
            setformerror({auth:"Invalid credentials"})
            setisSubmit(false)
        }
        
    
    }
    CheckUser()
     

   }
  

   useEffect(()=>{
    if(Object.keys(formerror).length===0 &&isSubmit){
        handleClick()
    }
   },[formerror])

    
    return(
        <div className="get-profile-div">
           
            <div className="get-profile-box">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
            <input name="Username"   onChange={handleChange} className="name" placeholder="Username" value={userinfo.Username}/>
            <p>{formerror.Username}</p>
            <input name="Password"  onChange={handleChange} className="password" placeholder="Password" value={userinfo.Password} />
            <p>{formerror.Password}</p>
             <button className="btn btn-light submit">Submit</button>  
             <p>{formerror.auth}</p> 
            </form>
        
             </div>
        </div>
    )
}

export default Login;
export {user};