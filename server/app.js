import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from 'cookie-parser'
import notesController from "./Controller/notesController.js";
import userController from './controller/usercontroller.js'
import requiresAuth from "./middleware/requiresAuth.js";


if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

const app = express();

app.use(cookieParser())
app.use(express.json());
app.use(cors());


// userController Routes

app.post("/signup",userController.signup)
app.post("/login",userController.login)
app.get("/logout",userController.logout)
app.get('/check-auth',requiresAuth,userController.checkAuth)


app.get("/notes",  notesController.viewNotes);

app.get("/notes/:Id",  notesController.viewNote);

app.post("/notes",  notesController.addNote);

app.put("/notes/:id",  notesController.updateNote);

app.delete("/notes/:id",  notesController.deleteNote);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database connected");
});
