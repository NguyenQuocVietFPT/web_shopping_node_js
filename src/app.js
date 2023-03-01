//Constructor some variables
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const db = require('./config/db');
const routes = require('./routes');
//Set connection to mongodb
db.connect();

//Set to show json and get data form
app.use(express.json());
app.use(express.urlencoded({
    urlencoded: true
}))

//Set static files
app.use(express.static(path.join(__dirname,'public')));

//Set template engine
app.engine('hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources','views'));

//Set routes
routes(app);

//Set web's port
app.listen(port, () => {
  console.log(`Web application is listening at http://localhost:${port}`);
});