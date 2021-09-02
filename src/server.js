'use strict';

const express=require('express');
const cors =require('cors');

const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./auth/routes.js');

// Prepare the express app
const app = express();
app.use(cors());
app.use(express.json());


/// proof of life 
app.get('/', (req, res) => {
    res.status(200).send('This is  bearer-auth server ');
});

// all routes

app.use(authRoutes);
app.use(notFound);
app.use(errorHandler);



module.exports = {
    server: app,
    startup: (port) => {
        app.listen(port, () => {
            console.log(`Server Up on ${port}`);
        });
    },
};