import { useEffect } from "react";
import authStore from "../store/authStore"
import { Navigate, useNavigate } from "react-router-dom";


export default function RequireAuth(props) {

    const navigate=useNavigate()

    const store=authStore();
useEffect(()=>{
    if(store.loggedIn===null){
        store.checkAuth();

        if(store.loggedIn===null){
            return <div>Loading</div>
        }

        if(store.loggedIn===false){
          return <Navigate to='/login'/>
        }
    }
},[])



  if(!store.loggedIn){
    return <div>Please Login </div>  
  }

  return (
    <div>{props.children}</div>
  )
}
