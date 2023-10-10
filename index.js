const express = require('express')
const app = express();
const cors = require('cors');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', async (req, res) => {
    res.send('Hello world')
})

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.listen(3030, () => {
    console.log('Server listening on port 3030');
})