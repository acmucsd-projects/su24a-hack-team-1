const router = require('express').Router();
const app = express();
require('dotenv').config();
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.use(
    cors({
        origin: ['http://localhost:4000'],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
);
app.use(express.json());

let DB = [];

module.exports = router;