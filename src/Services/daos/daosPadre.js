import  MongoCarts  from './carritosDaos.js';
import  MongoProducts  from './productsDaos.js';




let productosDao = new MongoProducts();            
 let carritosDao = new MongoCarts();

export {productosDao, carritosDao};