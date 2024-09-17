//import dotenv 
const dotenv = require('dotenv');  

dotenv.config();


const config = {
    PORT: process.env.PORT,
    databaseURL: process.env.DATABASE_URL,

}

module.exports = config;