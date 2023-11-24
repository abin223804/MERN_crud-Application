import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
import notesController from "./Controller/notesController.js";
import userController from './controller/usercontroller.js'
import requiresAuth from "./middleware/requiresAuth.js";


if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

const app = express();

app.use(express.json());
app.use(cors());
// app.use(cookieParser());

// userController Routes

app.post("/signup",userController.signup)
app.post("/login",userController.login)
app.post("/logout",userController.logout)
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
