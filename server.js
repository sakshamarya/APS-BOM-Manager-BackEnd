const express = require('express')
var cors = require('cors')
const {MongoClient, ObjectId} = require('mongodb');
var mongodb = require('mongodb')
require("dotenv").config();

const app = express()
const port = 5000

// to parse post request
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())
app.use(cors());

// declaring uri variable the locally hosted database
const uri = "mongodb+srv://"+process.env.MONGODB_USERNAME+":"+process.env.MONGODB_PASSWORD+"@cluster0.8vp7psu.mongodb.net/?retryWrites=true&w=majority";

// creating a client correspoding to the uri
const client = new MongoClient(uri);

async function mongodbConnect(){
    
    try {
        await client.connect();
        // client.db("aps-database").collection("inventory").insertMany([{
        //     name: "SHEET",
        //     qty: 0,
        //     units: "kg"
        // },
        // {
        //     name: "NEUTRAL LINK",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "EARTH LINK",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "SHORTING B.BAR (1.5MM)",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "SHORTING SLEVE",
        //     qty: 0,
        //     units: "m"
        // },
        // {
        //     name: "L-PIN (4MM)",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "WELD PIN (4MM)",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "SLEVE CAP (END CAP)",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "SPRING (25MM)",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "ANGLE CORNER (90MM)",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "LOCK LIGHT GREY",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "N/L SUPPORT",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "STICKER WAY 4-16",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "STICKER ON/OFF",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "STICKER WARNING",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "STICKER N",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "STICKER TOP INNER",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "WASHER PLASTIC",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "CABLE TIE",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "POLYTHENE",
        //     qty: 0,
        //     units: "kg"
        // },
        // {
        //     name: "RETAIL CORUGA BOX",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "PIZZA/EPIC CORUGATE BOX",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "ACRELIC CORUG BOX",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "SINGLE DOOR CORUG BOX",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "LOCK D.A GREY",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "CORNERS EPIC",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "MASKIN SHEET EPIC",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "PLASTIC SCREW MASKING",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "FRONT PLASTIC",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "SPACER (Plastic 12mm)",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "CU STUD 5MM(Cover)",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "CU Ring Thimble 5.5m",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "1.5mm Green wire",
        //     qty: 0,
        //     units: "m"
        // },
        // {
        //     name: "PVC SLEVE 3 MM",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "RED WIRE 16MM ISI",
        //     qty: 0,
        //     units: "m"
        // },
        // {
        //     name: "YELLOW WIRE 16MM ISI",
        //     qty: 0,
        //     units: "m"
        // },
        // {
        //     name: "BLUE WIRE 16MM ISI",
        //     qty: 0,
        //     units: "m"
        // },
        // {
        //     name: "BLACK WIRE 10MM ISI",
        //     qty: 0,
        //     units: "m"
        // },
        // {
        //     name: "SCREW/NUT",
        //     qty: 0,
        //     units: "piece"
        // },
        // {
        //     name: "POWDER",
        //     qty: 0,
        //     units: "kg"
        // },
        // {
        //     name: "PRINTING INK",
        //     qty: 0,
        //     units: "kg"
        // }]
        // );
        console.log("successfully connected to the database.");

    } catch (error) {
        console.log("error in connecting to mongodb " + error);
    }
} 
mongodbConnect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/addPO', (req, res)=>{
    try {
        client.db("aps-database").collection("purchaseOrder").insertOne(req.body);
        res.sendStatus(200);
    } catch (error) {
        res.send(error);
    }
})

app.post('/addSearchHistory', async(req, res)=>{
    try {

        let data=[];
        for(let i=0;i<req.body.length;i++){
            let tempObject = {
                name: req.body[i].itemDescription,
                bom: req.body[i].bom
            }


            if(tempObject.name.length>0){
                try {
                    const data = await client.db("aps-database").collection("searchHistory").findOne({name: tempObject.name});
    
                    if(data){
                        console.log("Item exists");
                    }
                    else{
                        console.log("Item not exists");
                        data.push(tempObject);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            
        }
        try {
            const result = await client.db("aps-database").collection("searchHistory").insertMany(data);
        } catch (error) {
            res.send(error);
        }
        
        res.sendStatus(200);
    } catch (error) {
        res.send(error);
    }
})

app.get('/getSearchHistory', async(req, res)=>{
    try {
        const history = await client.db("aps-database").collection("searchHistory").find().toArray();
        res.send(history);
    } catch (error) {
        res.send(error);
    }
})

app.get('/getInventory', async(req, res)=>{
    try {
        const inventoryArray = await client.db("aps-database").collection("inventory").find().toArray();
        res.send(inventoryArray);
    } catch (error) {
        res.send(error);
    }
})

app.post('/updateInventory', async (req, res)=>{

    for(let i=0;i<req.body.length;i++){
        const id = new mongodb.ObjectId(req.body[i]._id);
        try {
            const result = await client.db('aps-database').collection('inventory').updateOne({_id: id},{
                $set : {
                    qty: req.body[i].qty
                }
            })
        } catch (error) {
            res.send(error);
        }
    }

    res.sendStatus(200);
})

app.post('/addToInventory', async (req, res)=>{

    const result = await client.db('aps-database').collection('inventory').insertOne(req.body);

    try {
        const result = await client.db('aps-database').collection('inventory').insertOne(req.body);
        res.sendStatus(200);
    } catch (error) {
        res.send(error);
    }
})

app.get('/getPendingPO', async(req, res)=>{
    try {
        const PO = await client.db("aps-database").collection("purchaseOrder").find().toArray();
        res.send(PO);
    } catch (error) {
        res.send(error);
    }
})

app.post('/deletePendingPO', (req,res)=>{
    const idToRemove = new mongodb.ObjectId(req.body._id);
    try {
        client.db("aps-database").collection("purchaseOrder").deleteOne( {_id: idToRemove});;
        res.sendStatus(200);
    } catch (error) {
        res.send(error);
    }
})

app.post('/addHistoryPO', (req, res)=>{
    try {
        client.db("aps-database").collection("history").insertOne(req.body);
        res.sendStatus(200);
    } catch (error) {
        res.send(error);
    }
})

app.get('/getHistory', async(req, res)=>{
    try {
        const history = await client.db("aps-database").collection("history").find().toArray();
        res.send(history);
    } catch (error) {
        res.send(error);
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})