import mongoose from "mongoose";



const connectToDb=()=> {

    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("Database connected");
    });
}

export default connectToDb ;