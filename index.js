'use strict';

require('dotenv').config();

const server = require('./src/server.js');
const {db}=require('./src/models/index.js');
//in models/index.js we exports obj contain 3 thing db and food and clothers so i need so specifiy which one of them i need to require so i use {db}

db.sync().then(()=>{
    server.start(process.env.PORT || 3001);
})
