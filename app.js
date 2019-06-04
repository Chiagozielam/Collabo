const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}))

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Setitng Static Folder
app.use(express.static(path.join( __dirname, 'public')));

//Database
const db = require('./config/database')


//Test Database
db.authenticate()
    .then((data) => console.log(`Database Connected... ${{data}}`))
    .catch((err) => console.log(`here is the error: ${err}`)
    );


//Index Route
app.get('/', (req, res) => res.render('index', { layout: 'landing' }))


//Gigs routes
app.use('/gigs', require('./routes/gigs'))




const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
