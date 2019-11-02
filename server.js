const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mainRoute = require('./routes/mainRouter');

let app = express();
app.set('view engine', 'pug');
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));
app.use('/', mainRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});