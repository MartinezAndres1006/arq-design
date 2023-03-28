
import { Router } from "express";
import passport from 'passport';
const Registrorouter = Router();

router.get('/registro', (req, res) => {
    res.render('registrarse');
});

router.post('/registro', passport.authenticate('registro', {
    successRedirect: '/login',
    failureRedirect: '/errorRegistro',
}));

export default Registrorouter