const express = require("express");
const passport = require('passport');

const cookieSession = require('cookie-session')
require('dotenv').config();
require('./passportSetup');

const app = new express();

app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
}))

app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session())

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/google', passport.authenticate('google', { scope: ['profile','email']}));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: "/failed" }), (req, res) => {
    res.redirect('/success')
});

app.get('/success', (req, res) => {
    res.render('profile', { name: req.user.displayName, pic: req.user.photos[0].value, email: req.user.emails[0].value })
});

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/')
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`);
}) 