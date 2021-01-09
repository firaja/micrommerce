const express = require('express');
const bodyParser = require('body-parser');

const port = 9001;

const app = express();
app.use(bodyParser.json());


app.use('/status', require('./routes/status'));




app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on ${port}`);
})