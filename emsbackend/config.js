const dotenv = require('dotenv');
const path = require('path');


console.log("Config loaded:");

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});


console.log(process.env.NODE_ENV);
console.log(process.env.MONGODB_URL);
console.log(process.env.PORT);


module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    URL: process.env.MONGODB_URL,
    PORT: process.env.PORT,
}