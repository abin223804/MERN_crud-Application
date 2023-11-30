import mongoose from "mongoose";

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: String,
    body: String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
})

export default mongoose.model("Note", noteSchema);
