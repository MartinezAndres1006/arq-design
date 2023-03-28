import { Router } from "express";
const logout = Router();

logout.get('/', (req, res) => {
    req.session.destroy(
        () => {
            res.render('login');
        }
    );
});


export default logout