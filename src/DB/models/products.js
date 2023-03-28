import mongoose from "mongoose";

 const productSchema = new mongoose.Schema({
    articulo: String,
    precio: Number,
    imagen: String
});


export default productSchema
