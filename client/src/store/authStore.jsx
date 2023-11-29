import {create} from "zustand";
import axios from "axios";

const authStore = create((set) => ({
    loggedIn: null,
    loginForm: {
        email: "",
        password: "",
    },
    signupForm: {
        email: "",
        password: "",
    },

    updateLoginForm: (e) => {
        const {name, value} = e.target;

        set((state) => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                },
            };
        });
    },
    updateSignupForm: (e) => {
        const {name, value} = e.target;

        set((state) => {
            return {
                signupForm: {
                    ...state.signupForm,
                    [name]: value,
                },
            };
        });
    },

    login: async (e) => {
        const {loginForm} = authStore.getState();
        const res = await axios.post("/login", loginForm, {withCredentials: true});
        set({loggedIn: true,loginForm:{
            email:"",
            password:"",
        }});
    },
    signup: async (e) => {
        const {signupForm} = authStore.getState();
        const res = await axios.post("/signup", signupForm, {withCredentials: true});
      
        set({
            signupForm:{
                email:"",
                password:"",
            }
        })

    },
    checkAuth: async (e) => {
        try {
            await axios.get("/check-auth", {withCredentials: true});
            set({loggedIn: true});
        } catch (err) {
            set({loggedIn: false});
        }
    },
     
    logout:async(e)=>{
        try{
          await  axios.get("/logout",{withCredentials:true})
            set({loggedIn:false})
        }catch(err){
            console.log(err);
        }
    }

}));

export default authStore;
