const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const passport = require('passport');

const Users = require('../models/users');

module.exports = (passport) => {
  passport.use(
    new LocalStrategy((username, password, done) => {
      Users.findOne({
        username: username
      }).then(admin => {
        if (!admin) {
          return done(null, false, { message: 'That email is not registered' });
        }
        console.log("Ready to check password matching");
        // Match password
        bcrypt.compare(password, admin.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            console.log("Password matched");
            return done(null, admin);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(admin, done) {
    done(null, admin.id);
  });

  passport.deserializeUser(function(id, done) {
    Users.findById(id, function(err, admin) {
      done(err, admin);
    });
  });
};
