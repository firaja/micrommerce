const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database.ts');

const port = 9001;
const serviceName = 'Product Service';

const app = express();
app.use(bodyParser.json());


app.use('/status', require('./routes/status'));

db.connectToDatabase();


app.listen(port, (err) => {
    if (err) throw err;
    console.log(`✅ ${serviceName} is running on port ${port}`);
});