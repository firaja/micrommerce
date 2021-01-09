const express = require('express');
const bodyParser = require('body-parser');

const port = 9001;
const serviceName = 'Product Service';

const app = express();
app.use(bodyParser.json());


app.use('/status', require('./routes/status'));




app.listen(port, (err) => {
    if (err) throw err;
    console.log(`✅ ${serviceName} is running on port ${port}`);
});