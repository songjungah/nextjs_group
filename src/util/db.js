// npm install mongodb

const { MongoClient } = require("mongodb");



    const url = ''
    const options = {};
    let connectDB;

    if(process.env.NODE_ENV === 'development'){
        if(!global._mongo){
            global._mongo = new MongoClient(url, options).connect()
        }
        return connectDB = global._mongo
    }else{
        return connectDB  = new MongoClient(url, options).connect()
    }
