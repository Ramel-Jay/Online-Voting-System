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
// app.use(express.static(`public`));
app.use('/avatar',express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/avatar');
    },
    filename:  (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage:  storage,
    fileFilter: function(req, file, cb){
        if(!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)){
            req.fileValidatorError = "Only the Image file os allowed";
            return cb(new Error("Only the image file is allowed"), false);
        }
        cb(null, true);
    }
});

app.use(express.static(path.join(__dirname, 'public')));

router.post('/AdminProfile', upload.single('avatar_url'), async(req, res) => {
    try{
        const{
            first_name,
            last_name,
            gender,
            address,
            mobile_number,
            role,
            email,
            password,
            avatar_url = req.file.filename,
        } = req.body;
        bycrypt.hash(password, 10).then((hash) => {
            Admin_Profile.create({
                first_name:     first_name,
                last_name:      last_name,
                gender:         gender,
                address:        address,
                mobile_number:  mobile_number,
                role:           role,
                email:          email,
                password:       hash,
                avatar_url:     avatar_url,
            }).then(() => {
                res.json("Created New Admin User");
            }).catch ((err) => {
                if(err){
                    res.json({error: err.message});
                }
            });
        });
    }catch{
        res.json('Field to create Admin')
    }
});

router.get("/admins", async (req, res) => {
    const admin = await Admin_Profile.findAll();
    res.json(admin);
});

module.exports = router;