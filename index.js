'use strict';
require('dotenv').config();
// start db server
const {db}=require('./src/auth/models/index');
db.sync().then(()=>{
    //start
    require('./src/server').startup(process.env.PORT)
});