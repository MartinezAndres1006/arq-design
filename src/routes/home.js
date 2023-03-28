import { Router } from "express";
import isAuth from "../Services/middlewares.js";
const home = Router();


home.get('/', isAuth, (req, res) => {
    const {nombre,imagen}= req.user
   
     res.render('home', {nombre,imagen});
 
 });
 

home.get('/perfil' , isAuth,(req,res)=>{
    
    const { nombre,correo,edad,direccion,telefono,imagen } = req.user
    
          res.render('perfil',{nombre,correo,edad,direccion,telefono,imagen})
    
    })
    



export default home;