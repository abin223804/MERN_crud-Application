import express from "express";
const app = express();
import userController from "../controller/usercontroller.js";

const userroutes = () => {
    app.post("/signup", userController.signup);
    app.post("/login", userController.login);
    app.get("/logout", userController.logout); 
};

export default userroutes;
