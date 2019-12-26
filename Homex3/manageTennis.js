var express = require('express');
const mongoose = require('mongoose');
const connection = require('./DB_Connection/db_connection').connection;
const { routers } = require('./routers');
const manageTennis = express();
const port = 8010;
manageTennis.use(express.json());
manageTennis.use(express.urlencoded({ extended: true }));

manageTennis.use('/', routers );
manageTennis.listen(port);
console.log(`listening on port ${port}`);

