const dotenv = require('dotenv').config();
const server = http.createServer(app);
const express = require('express');
const app = express();
const cors = require('cors');
require('./database.js');

//settings
app.set('port', process.env.PORT || 5000);

//middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use(require('./Routes.js'))

server.listen(app.get('port'),function (){
	console.log('server on port 3000');
})