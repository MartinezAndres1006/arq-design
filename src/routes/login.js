import { Router } from "express";
const login = Router();
import passport from "passport";


login.get('/', (req, res) => {
    res.render('login');
});

login.post('/', passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/errorLogin',
}));

export default login