const { MongoClient, ServerApiVersion } = require("mongodb");


let db;
const connectDB = async() =>{
   if(db) return db
   try{

    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

    if (!uri) {
        throw new Error("MongoDB URI is not provided.");
      }

    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
        
      });

      await client.connect();

      db =  client.db('next-hero')

      return db;



   }catch (error){
    console.error("Failed to connect to the database:", error);
    throw error; // Throwing the error for better error propagation
   }
}

export default connectDB;