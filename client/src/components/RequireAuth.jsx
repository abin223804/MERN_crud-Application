import authStore from "../store/authStore"


export default function RequireAuth(props) {

    const store=authStore();
  if(!store.loggedIn){
    return <div>Please Login </div>  
  }

  return (
    <div>{props.children}</div>
  )
}
