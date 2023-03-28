import { Router } from 'express';
const router = Router();
import log4js from 'log4js'
import carritosRouter from './carritos.js';
import productRouter from './productos.js';
import sendEmail from '../config/nodemailer.js';
import home from './home.js';
import perfil from './perfil.js';
import login from './login.js';
import logout from './logout.js';



router.use("/productos",productRouter)
router.use("/carrito",carritosRouter)
router.use("/home",home)
router.use("/perfil",perfil)
router.use("/login",login)
router.use("/logout",logout)
log4js.configure({
    appenders:{
        consola: { type: "console" },
        info: { type: "file", filename: './.log/debug.log'},
        warn:{type:"file",filename: './.log/warn.log'},
        error:{type:"file",filename:'./.log/error.log'} 
    },


    categories:{
        default:{
            appenders: ["consola","info"],
            level:"ALL"
        },
        error:{
            appenders:["error"],
            level:"ERROR"
        },
        warn:{
            appenders:["warn"],
            level:"WARN"
        }

    }
})

const logger= log4js.getLogger('error')






router.get('/', (req, res) => {
    res.redirect('login');
});


router.get("/compraFinalizada",(req,res)=>{
const {nombre,imagen,correo}=req.user

sendEmail(correo, nombre);
res.render("compra",{nombre,imagen})


})

router.get('/errorRegistro', (req, res) => {
    
    res.render('errorRegistro');
});

router.get('/errorLogin', (req, res) => {
    res.render('errorLogin');
    logger.error('Faltan Datos, o los que estan son incorrectos')
});

  router.use(function(req, res, next) {
    logger.warn('La ruta seleccionada no existe')
    res.status(404).render('../views/rutaUndefined');
  });
  


export default router;