const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = express.Router();
const { Admin_Profile } = require('../models');

app.use(express.json());
app.use(cors());

router.post('/AdminProfile', async(req, res) => {
    try{
        const AdminProfile  = req.body;
        await Admin_Profile.create(AdminProfile);
        res.json("Admin Created");
    }catch{
        res.json('Field to create Admin')
    }
});

module.exports = router;