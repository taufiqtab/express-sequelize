const express = require('express');
const cors = require('cors');
const db = require('./config/database.js');
const router = require('./routes/routes.js');


const app = express();

app.use(express.json());
app.use(cors());

//test connection
try{
    async () => {await db.authenticate();}
    console.log("Connection has been established successfully.");
}catch(err){
    console.error("Unable to connect to the database:", err);
}

app.use(router);
app.listen(5000, ()=> console.log('Server Running'));