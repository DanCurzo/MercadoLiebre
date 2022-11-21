const express = require('express');

// Server
const app = express();

app.listen(5050, () => {
    console.log('Running on port 5050');
});

const {join} = require('path');

// EJS
app.set('views', join(__dirname,'./views'));
app.set('view engine', 'ejs');

// Static
app.use(express.static(join(__dirname,"../public")));

// Rutas
app.use(require('./routes/index.js'));