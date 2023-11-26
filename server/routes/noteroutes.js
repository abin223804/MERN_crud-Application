import express from "express";
const app = express();

import notesController from "../controller/notesController.js";

const noteroutes=()=>{

    app.get("/notes",  notesController.viewNotes);

    app.get("/notes/:Id",  notesController.viewNote);
    
    app.post("/notes",  notesController.addNote);
    
    app.put("/notes/:id",  notesController.updateNote);
    
    app.delete("/notes/:id",  notesController.deleteNote);

}

export default  noteroutes ;
