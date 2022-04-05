const express = require('express');
const app = express();
const router = require('./routes/');
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(router);

app.listen(4000, console.log('Server is launched 🚀 http://localhost:' + PORT));
