import mongoose from 'mongoose'

export const connectToDb = async () =>{
    const connection = {}; 

    try{
        if(connection.isConnected) return;
        // create a .env file place your credentials there
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected= db.connections[0].readyState;
        console.log("connected to database")
    }
    catch (error){
        console.log(error)
        
    }
}