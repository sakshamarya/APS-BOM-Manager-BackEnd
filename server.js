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

const corsOptions = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };

app.use(cors(corsOptions));

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

function compare(object1, object2){
    let dd1=object1.date.substring(0,2);
    let dd2=object2.date.substring(0,2);
    let mm1=object1.date.substring(3,2);
    let mm2=object2.date.substring(3,2);
    let yy1=object1.date.substring(6,4);
    let yy2=object2.date.substring(6,4);

    if(yy1>yy2){
        return -1;
    }
    else if(yy1<yy2){
        return 1;
    }
    else{
        if(mm1>mm2){
            return -1;
        }
        else if(mm1<mm2){
            return 1;
        }
        else{
            if(dd1>dd2){
                return -1;
            }
            else if(dd1<dd2){
                return 1;
            }
            return 0;
        }
    }
}

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
    let data=[];

    for(let i=0;i<req.body.length;i++){
        if(req.body[i].itemDescription.length>0){
            try {
                const exists = await client.db("aps-database").collection("searchHistory").findOne({name: req.body[i].itemDescription});

                if(exists){
                    console.log("Item exists", req.body[i].itemDescription);
                }
                else{
                    console.log("Item not exists", req.body[i].itemDescription);
                    data.push({
                        name: req.body[i].itemDescription,
                        bom: req.body[i].bom
                    });
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    try {
        const result = await client.db("aps-database").collection("searchHistory").insertMany(data);
        res.sendStatus(200);
    } catch (error) {
        res.send(error);
    }
    

})

// function to sort an object by key

function sortObject(obj) {
    return Object.keys(obj).sort().reduce(function (result, key) {
      result[key] = obj[key];
      return result;
    }, {});
  }

app.post('/addInventoryItemToSearchHistory', async(req, res)=>{
    try {
        const history = await client.db("aps-database").collection("searchHistory").find().toArray();
        console.log(history);

        for(let i=0;i<history.length;i++){
            // update bom of history[i]

            let newBom = history[i].bom;
            newBom[req.body.name]=0;

            newBom = sortObject(newBom);

            const result = await client.db('aps-database').collection('searchHistory').updateOne({_id: history[i]._id},{
                $set : {
                    bom: newBom
                }
            })
        }

        res.sendStatus(200);

    } catch (error) {
        res.send(error);
    }
})

app.post('/deleteInventoryItemToSearchHistory', async(req, res)=>{
    try {
        const history = await client.db("aps-database").collection("searchHistory").find().toArray();
        console.log(history);

        for(let i=0;i<history.length;i++){
            // update bom of history[i]

            let newBom = history[i].bom;

            delete newBom[req.body.name];

            newBom = sortObject(newBom);

            const result = await client.db('aps-database').collection('searchHistory').updateOne({_id: history[i]._id},{
                $set : {
                    bom: newBom
                }
            })
        }

        res.sendStatus(200);

    } catch (error) {
        res.send(error);
    }
})

app.get('/getSearchHistory', async(req, res)=>{
    try {
        const history = await client.db("aps-database").collection("searchHistory").find().sort({name: 1}).toArray();
        res.send(history);
    } catch (error) {
        res.send(error);
    }
})

app.post('/deleteSearchHistoryItem', (req,res)=>{
    const idToRemove = new mongodb.ObjectId(req.body._id);
    try {
        client.db("aps-database").collection("searchHistory").deleteOne( {_id: idToRemove});;
        res.sendStatus(200);
    } catch (error) {
        res.send(error);
    }
})

app.post('/updateSearchHistory', async (req, res)=>{

    const id = new mongodb.ObjectId(req.body._id);

    try {
        const result = await client.db('aps-database').collection('searchHistory').updateOne({_id: id},{
            $set : {
                name: req.body.name,
                bom: req.body.bom
            }
        })
    } catch (error) {
        console.log(error);
        res.send(error);
    }

    res.sendStatus(200);
})

app.get('/getInventory', async(req, res)=>{
    try {
        const inventoryArray = await client.db("aps-database").collection("inventory").find().sort({name: 1}).toArray();
        console.log(inventoryArray);
        res.send(inventoryArray);
    } catch (error) {
        res.send(error);
    }
})

app.post('/updateInventory', async (req, res)=>{

    for(let i=0;i<req.body.length;i++){
        const id = new mongodb.ObjectId(req.body[i]._id);
        const name = req.body[i].name;
        try {
            const result = await client.db('aps-database').collection('inventory').updateOne({_id: id},{
                $set : {
                    name: req.body[i].name,
                    qty: parseInt(req.body[i].qty),
                    units: req.body[i].units
                }
            })
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }

    res.sendStatus(200);
})

app.post('/addToInventory', async (req, res)=>{
    console.log("Here");
    try {
        const result = await client.db('aps-database').collection('inventory').insertOne(req.body);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

app.post('/deleteInventoryItem', (req,res)=>{
    const idToRemove = new mongodb.ObjectId(req.body._id);
    try {
        client.db("aps-database").collection("inventory").deleteOne( {_id: idToRemove});;
        res.sendStatus(200);
    } catch (error) {
        res.send(error);
    }
})

app.get('/getPendingPO', async(req, res)=>{
    try {
        const PO = await client.db("aps-database").collection("purchaseOrder").find().toArray();
        PO.sort(compare);
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
        history.sort(compare);
        res.send(history);
    } catch (error) {
        res.send(error);
    }
})

app.post('/getPoNumber', async(req, res)=>{

    console.log(req.body[0]);

    try {
        const pendingPo = await client.db("aps-database").collection("purchaseOrder").find({
            $and: [
                { date: req.body[0] },
                { orderCategory: "purchase" }
            ]
        }).toArray();
        const history = await client.db("aps-database").collection("history").find({
            $and: [
                { date: req.body[0] },
                { orderCategory: "purchase" }
            ]
        }).toArray();

        console.log(pendingPo);
        console.log(history);
        
        let numberArray = [];

        for(let i=0;i<pendingPo.length;i++){
            let sz=pendingPo[i].poNumber;
            let sz1 = parseInt(sz)-9; // 9 is the size of DDMMYYYY/, so rest will be of number

            let numberOfPO = pendingPo[i].poNumber.substring(9, parseInt(sz1));

            numberArray.push(parseInt(numberOfPO));
        }

        for(let i=0;i<history.length;i++){
            let sz=history[i].poNumber;
            let sz1 = parseInt(sz)-9; // 9 is the size of DDMMYYYY/, so rest will be of number

            let numberOfPO = history[i].poNumber.substring(9, parseInt(sz1));

            numberArray.push(parseInt(numberOfPO));
        }

        numberArray.sort();

        console.log(numberArray);

        let numberToBeSent = 1;

        if(numberArray.length){
            numberToBeSent = numberArray[numberArray.length-1]+1;
        }

        let arrayToBeSent = [];
        arrayToBeSent.push(numberToBeSent);

        console.log(arrayToBeSent);

        res.send(arrayToBeSent);
    } catch (error) {
        res.send(error);
    }

})

app.get('/getPassword', async(req, res)=>{
    try {
        const password = await client.db("aps-database").collection("password").find().toArray();
        res.send(password);
    } catch (error) {
        res.send(error);
    }
})

app.post('/changePassword', async(req, res)=>{
    console.log(req.body[0]);
    try {
        const password = await client.db("aps-database").collection("password").find().toArray();
        const result = await client.db('aps-database').collection('password').updateOne({_id: password[0]._id},{
            $set : {
                password: req.body[0]
            }
        })
        res.sendStatus(200);
    } catch (error) {
        res.send(error);
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})