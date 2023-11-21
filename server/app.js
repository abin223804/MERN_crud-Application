import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors'
import controller from "./controller/notesController.js";

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

const app = express();

app.use(express.json());
app.use(cors());

app.get("/notes", controller.viewNotes);

app.get("/notes/:Id", controller.viewNote);

app.post("/notes", controller.addNote);

app.put("/notes/:id", controller.updateNote);

app.delete("/notes/:id", controller.deleteNote);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database connected");
});
