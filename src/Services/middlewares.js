function isAuth(req, res, next) {
    if (req.isAuthenticated()) { // Si esta autenticado sigue con la ejecucion que queremos
        return next();
    }
    res.redirect('/login');
}
    export default isAuth;