const path = require('path');
const express = require('express');
const routDirectury = require('../utilities/path');

const router = express.Router();

router.get('/add-product', function(req,res){
    res.sendFile(path.join(routDirectury, 'views', 'add-product.html'));
});

module.exports = router;