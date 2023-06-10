const jwt = require("jsonwebtoken");

const createToken = (user) => {
    const accessToken = jwt.sign({ id: user.id, avatar_url: user.avatar_url, first_name: user.first_name}, "Secret12345Token");
    return accessToken;
}

const validateToken = (req, res, next) => {
    const accessToken = req.cookies["token"];

    if(accessToken){
        try{
            const validToken = jwt.verify(accessToken, "Secret12345Token");
            req.user = validToken;

            if(validToken){
                console.log("Admin Authenticated");
                req.authenticated = true;
                return next();
            }
        }catch(err) {
            return res.json({error: err});
        }
    }else {
        return res.json({error: "Admin not Authenticated"});
    }
}

const removeToken = (req, res) => {
    res.clearCookie("token");
    res.json("Log out");
}

module.exports = { createToken, validateToken, removeToken };