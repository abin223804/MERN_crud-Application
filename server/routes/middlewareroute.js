
import express from "express";
const app = express();
import userController from "../controller/usercontroller.js";
import requiresAuth from "../middleware/requiresAuth.js";


const  middlewareroute=()=> {
  app.get('/check-auth',requiresAuth,userController.checkAuth)


}

export default middlewareroute;