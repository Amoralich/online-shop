const path = require('path');
const express = require('express');
const routDirectury = require('../utilities/path');

const router = express.Router();

router.get('/', function(req, res){
    res.sendFile(path.join(routDirectury, 'views', 'shop.html'));
});

module.exports = router;