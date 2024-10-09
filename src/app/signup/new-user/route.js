import connectDB from "@/app/lib/connectDB";

export const POST = async (request) => {
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");

    const newUser = await request.json(); // Correctly receiving JSON data from the request
    const res = await userCollection.insertOne(newUser); // Insert the new user into the collection
    
    console.log(newUser);

    // Return a successful response with status 201 (Created)
    return new Response(JSON.stringify({ message: "New user created" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);

    // Return an error response with status 500 (Internal Server Error)
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
