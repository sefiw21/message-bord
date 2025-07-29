const express = require('express');
const path = require('path');

const routeIndex = require('./routes/index');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routeIndex);

const port= 6060;

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
