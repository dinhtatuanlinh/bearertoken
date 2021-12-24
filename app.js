const express = require('express');
const http = require('http');
const cookieParser = require('cookie-parser')
require('dotenv').config();
const bodyParser = require('body-parser');

const initWebRoutes = require("./routes/web");
const viewEngine = require("./config/viewEngine");

let app = express();
let server = http.createServer(app);

// use midleware bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
viewEngine(app);
app.use('/', initWebRoutes());

// lấy tham số trong file .env môi trường
let port = process.env.PORT || 6969; // ||hoặc
// PORT === undefined thì gán vào 6969

server.listen(port, () => {
    console.log(`app is running at port: http://localhost:${port}`);
});