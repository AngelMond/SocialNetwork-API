const express = require('express');

//Import connection to database
const db = require('./config/connection');

//Import Routes
const routes = require('./routes')

const PORT = process.env.PORT || 3001;
const app = express();

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//Start connection to DB and server
const init = async (req,res)=>{
    try{
        await db.once('open', ()=>{
            console.log('Connection to DB successfull');
            app.listen(PORT, ()=>console.log(`Web server listening on port ${PORT}`));
        });
    }catch(err){
        res.status(500).send({message: 'Connection to the database and webserver Failed'});
    }
}
//Initialize server
init();