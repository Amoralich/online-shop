const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/shop');
const adminData = require('./routes/admin');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use('/admin', adminData.route);  

app.use(function(req,res, next){
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
   //console.log("Path", path);
});