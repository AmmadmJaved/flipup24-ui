

Username = 'flipupservices' // mongo Cluster user
Password = '5oD8x12cAWtSqltJ'// mongo Cluster password current IP = 39.43.133.110

npm install mongodb


mongodb+srv://flipupservices:5oD8x12cAWtSqltJ@cluster0.0u0c5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


Connecting with MongoDB Driver
1. Select your driver and version
We recommend installing and using the latest driver version.

Driver

Version

2. Install your driver
Run the following on the command line
npm install mongodb

View MongoDB Node.js Driver installation instructions.
3. Add your connection string into your application code
Use this connection string in your application


View full code sample


Show Password

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://flipupservices:5oD8x12cAWtSqltJ@cluster0.0u0c5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

The password for flipupservices is included in the connection string for your first time setup. This password will not be available again after exiting this connect flow.


{
    "name": "Admin",
    "email": "Admin@gmail.com",
    "password": "Qwpo246erty@123"
}