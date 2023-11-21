import mongoose from "mongoose";


const Schema=mongoose.Schema;


const noteSchema = new Schema({
    title: String,
    body: String,
});

export default  mongoose.model("Note", noteSchema);


