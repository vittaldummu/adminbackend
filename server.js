const express = require('express');
const passport = require('passport');
const session = require('express-session');
const methodOverride = require('method-override');
const mongoose = require("mongoose");
const cors = require("cors");

const AdminRoute = require("./routes/admin");
const CMSroute = require("./routes/CMSpage");
const BlogRoute = require("./routes/blog")

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: "gobo_secret_app_and_password",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

mongoose.connect('mongodb+srv://wordsys:wordsys1234@cluster0.3oudl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
});
var conn = mongoose.connection;

conn.on('connected',()=>{
    console.log('MongoDB connected')
});

conn.on('error',(err)=>{
    if(err)
    console.log(err)
});

app.use(AdminRoute.adminController);
app.use(CMSroute.CMScontroller);
app.use(BlogRoute.blogController);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server started at port: ${PORT}`);
});