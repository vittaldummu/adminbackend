const express = require('express');
const router = express.Router();
const Users = require("../models/users");
const passport = require('passport');
const bcrypt = require('bcrypt');
require('method-override');
require('../config/passport')(passport);


router.post("/gobo/admin", (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.username ) {
      return res.status(400).send({
        message: "Required field can not be empty",
      });
    }
    const user = new Users({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      username: req.body.username
    });
    user
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the User.",
        });
      });
});

router.post("/login", (req,res,next) => {
  console.log(req.body)
  passport.authenticate("local", (err,user,info) => {
    if(err) throw err;
    if(!user) res.send("No user exists");
    else{
      req.logIn(user,err => {
        if(err) throw err;
        res.send("Successfully authenticated")
      })
    }
  })(req,res,next);
});

router.post('/profile/update',async (req, res) => {
  if(!req.body){
    return res
        .status(400)
        .send({ message : "Data to update can not be empty"})
  }
  const _id = ObjectID(req.session.passport.user);
  console.log(_id)
  Users.findByIdAndUpdate(_id, req.body, { useFindAndModify: true})
    .then(data => {
        if(!data){
            res.status(404).send({ message : `Cannot Update user with ${_id}. Maybe user not found!`})
        }else{
            res.send("Successfully updated");
        }
    })
    .catch(err =>{
        res.status(500).send({ message : "Error Update user information"})
    })
});

module.exports = {
    adminController: router
}