const express = require('express')
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');
var bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.json())
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/stuff',stuffRoutes);
app.use('/api/auth',userRoutes);


app.listen(process.env.PORT || 3000,()=>{
    console.log("server started...")
})

module.exports = app;