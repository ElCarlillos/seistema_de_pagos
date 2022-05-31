const express = require('express');
const bp = require('body-parser');
const app = express();
const conn = require('./conn');
//Middleware:
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.use('/api', require('./src/routes/api'));

app.listen(3000, () => {
    console.log('App running on port 3000...');
});