const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();
const { Admin_Profile } = require('../models');
const bcrypt  = require('bcryptjs');
const multer  = require('multer');
const path = require('path');
const cookieParser = require('cookie-parser');
const { createToken, validateToken, removeToken } = require('../middleware/JWT');

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
        bcrypt.hash(password, 10).then((hash) => {
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

router.get("/", async (req, res) => {
    const admin = await Admin_Profile.findAll();
    res.json(admin);
});

router.post("/login", async(req, res) => {
    try{
        const { email, password } = req.body;

        const user = await Admin_Profile.findOne({where: {email: email}});

        if(!user) return res.json("Admin User not Found");

        bcrypt.compare(password, user.password).then((match) => {
            if(!match) return res.json("Email or password is incorrect");

            const accessToken = createToken(user);

            res.cookie("token", accessToken, {
                maxAge: 60 * 60 * 12 * 1000,
                httpOnly: true,
            });

            res.json("Login success");
        });
    }catch (err) {
        console.log(err.message);
    }
});

router.get("/logout", removeToken, async(req, res) => {
    res.json("Log out");
    process.exit(0);
});

module.exports = router;