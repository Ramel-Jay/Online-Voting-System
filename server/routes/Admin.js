const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();
const { Admin_Profile } = require('../models');
const bycrypt  = require('bcryptjs');
const multer  = require('multer');
const path = require('path');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/avatar');
    },
    filename:  (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

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