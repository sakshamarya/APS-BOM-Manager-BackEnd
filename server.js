const express = require('express')
var cors = require('cors')
const {MongoClient} = require('mongodb');
require("dotenv").config();

const app = express()
const port = 5000

// to parse post request
app.use(
    express.urlencoded({
        extended: true
    })
)

console.log(process.env.MONGODB_USERNAME);

app.use(express.json())
app.use(cors());

// declaring uri variable the locally hosted database
const uri = "mongodb+srv://"+process.env.MONGODB_USERNAME+":"+process.env.MONGODB_PASSWORD+"@cluster0.8vp7psu.mongodb.net/?retryWrites=true&w=majority";

// creating a client correspoding to the uri
const client = new MongoClient(uri);

async function mongodbConnect(){
    
    try {
        await client.connect();
        console.log("successfully connected to the database.");

        // retrieveDocuments();

    } catch (error) {
        console.log("error in connecting to mongodb " + error);
    }
} 
mongodbConnect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})