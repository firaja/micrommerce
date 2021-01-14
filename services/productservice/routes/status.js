const express = require('express');
const packageJson = require('../package.json');


const router = express.Router();

router.get('/', (req, res) => {
    res.statusCode = 200;
    res.end(`${packageJson.name} - v${packageJson.version}`);
});


module.exports = router;