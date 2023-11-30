import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:'string',
        required:true,
        unique:true,
        lowercase:true,
        index:true,
    },
    password:{
     type:'string',
     required:true,

    },
    notes:[{type:mongoose.Schema.Types.ObjectId,ref:"Note"}],
});

export default mongoose.model("User", userSchema);
