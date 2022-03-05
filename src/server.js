'use strict';
const foodRoutes = require('./routes/food.js');
const clothesRoutes = require('./routes/clothes.js');
const express = require('express');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());//access the body
app.use(foodRoutes);
app.use(clothesRoutes);
app.use(logger);
app.get("/",(req,res)=>{
    res.send("server is alive");
})

function start(port) {
    app.listen(port,()=>{
        console.log(`running on port ${port}`)
    })
}
app.use(errorHandler);
app.use('*',notFound);
module.exports = {
    app: app,
    start: start
}