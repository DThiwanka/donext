const config = require("./config");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
let mode = '';

const app = express();

console.log(`NODE_ENV: ${config.NODE_ENV}`);

// const URL = process.env.MONGODB_URL;
// const PORT = process.env.PORT;

const URL = config.URL || process.env.MONGODB_URL;

// const PORT = config.PORT;

mongoose.connect(URL, {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndVerify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongo Db Connected 💕🚀");
})

// const EmployeeRouter = require('./routes/Employee');
app.use(
    require('./routes/Employee')
);

const port = config.PORT || process.env.PORT || 3000; // Use a default port if not provided
app.listen(port, () => {
    console.log(`Server is Running on PORT ${config.PORT} 😎💤`);
    console.log(`Server Runnning env is ${config.NODE_ENV} 👍`);
});
