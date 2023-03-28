import { Router } from "express";
import isAuth from "../Services/middlewares.js";
const perfil = Router();

perfil.get('/' , isAuth,(req,res)=>{
    
    const { nombre,correo,edad,direccion,telefono,imagen } = req.user
    
          res.render('perfil',{nombre,correo,edad,direccion,telefono,imagen})
    
    })
    export default perfil