const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
    res.statusCode = 200;
    res.end('OK');
});


module.exports = router;