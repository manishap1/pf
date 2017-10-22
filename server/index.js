// main page
const express =require('express');
const http =require('http');
const bodyParser =require('body-parser');
const morgan =require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');


//db setup
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:auth/auth');

//App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type:"*/*" }));

router(app);


//server setup
const port = process.env.PORT || 3090;
// const server = http.createServer(app);
// server.listen(port);

app.listen(port, () => console.log('server listning on : ', port))

