const Express = require('express');
var bodyParser = require("body-parser");
var cors = require('cors');
var path = require('path');

var uploadRouter = require('./routes/upload');

// create an express instance/object
const express = new Express();
express.use(cors());
express.use(bodyParser.json());
express.options('*', cors());

const user = require('./handlers/employeeHandler');
const item = require('./handlers/itemsHandler');

// create a route handler
function rootHandler(request, response) {
    response.json({ "test": "OK" });
}


express.use(Express.json()); // same as bodyParser.json()
express.use(Express.urlencoded({ extended: false }));
express.use(Express.static(path.join(__dirname, 'public')));

// create new user
express.get('/api/login', rootHandler);
express.post('/user', user.insertUser);
express.post('/user/login', user.loginUser);
express.get('/item', item.fetchItem);
express.post('/item', item.addItem);
express.post('/item/upload', uploadRouter);


// mount the handler to the route
express.get('/test', rootHandler);

// listen for connection
express.listen(3000, 'localhost', () => console.log("successfully running on 3000 port"));