const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.json());
app.use(cors({origin: ["http://127.0.0.1:5173"]}));
app.use(cookieParser());
app.use(express.static('public'));

const db = require('./models');

//Routers
const AdminRouter = require('./routes/Admin');
app.use('/', AdminRouter);



db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('listening on port 3001');
    });
});