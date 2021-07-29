const express = require("express");
const User = require("../models/user")
const router = express.Router();
// const {createUserJwt} = require('../utils/tokens') // create jwt
// const security = require('../middleware/security')

router.post("/login", async (req,res,next) => {

    try{
        
        const user = await User.login(req.body)
        // const token = createUserJwt(user)
        return res.status(200).json({ user })
        //take the users email and password and attempting to authenticate them
    } catch(err){
        next(err);
    }
})

router.post("/register", async (req,res,next) => { 
    try{
        
        //take the users email, password and create a new user in our database
        const user = await User.register(req.body)
        // const token = createUserJwt(user)
        return res.status(201).json({ user })
    } catch(err){
        next(err);
    }
    
})

// router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
//     try {
//       const { email } = res.locals.user;
//       const user = await User.fetchUserByEmail(email);
//       const publicUser = await User.makePublicUser(user);
//       res.status(200).json({ user: publicUser });
//     } catch (err) {
//       next(err);
//     }
//   });
  

module.exports = router;